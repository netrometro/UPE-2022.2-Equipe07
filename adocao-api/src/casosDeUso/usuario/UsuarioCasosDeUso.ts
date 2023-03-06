import { hash } from "bcryptjs";
import { client } from "../../prisma/client";
import { indentificarAutorToken } from "../../provedores/indentificarAutorToken";

interface CadastratoUsuario {
    nome: string;
    descricao: string | null;
    email: string;
    senha: string;
}

interface AtualizarSenhaProps {
    token: string;
    novaSenha: string;
}

export class UsuarioCasosDeUso {

    async cadastrar({ nome, descricao, email, senha }: CadastratoUsuario) {

        const validacaoEmail = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;

        const emailValido = validacaoEmail.test(email);
        if (!emailValido) {
            throw new Error("Email inválido!");
        }

        if (nome.length < 3) {
            throw new Error("Nome curto!");
        }

        if (senha.length < 8) {
            throw new Error("Senha curto!");
        }

        const usuarioExistente = await client.usuario.findFirst({
            where: {
                email
            }
        });

        if (usuarioExistente) {
            throw new Error("Email já cadastrado por outro usuário!");
        }

        const senhaHash = await hash(senha, 8);



        await client.usuario.create({
            data: {
                nome,
                descricao,
                senha: senhaHash,
                email,
                criacao: new Date(),
                estado: "ATIVO"
            }
        });
    }

    async atualizarSenha({token, novaSenha}: AtualizarSenhaProps) {
        const id = await indentificarAutorToken(token);
        if (!id) {
            throw new Error("Token inválido!");
        }
        
        const usuarioExistente = await client.usuario.findFirst({
            where: {
                id:id.toString()
            }
        });

        if (!usuarioExistente) {
            throw new Error("Token inválido!");
        }

        const senhaHash = await hash(novaSenha, 8);

        await client.usuario.update({
            where: {
                id:id.toString()
            },
            data: {
                senha: senhaHash
            }
        });
    }
}