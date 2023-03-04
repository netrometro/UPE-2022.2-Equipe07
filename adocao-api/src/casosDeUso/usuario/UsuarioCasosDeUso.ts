import { hash } from "bcryptjs";
import { client } from "../../prisma/client";

interface CadastratoUsuario {
    nome: string;
    descricao: string | null;
    email: string;
    senha: string;
}

export class UsuarioCasosDeUso {

    async cadastrar({ nome, descricao, email, senha }: CadastratoUsuario) {

        const validacaoEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

        const emailValido = validacaoEmail.exec(email);
        if (!emailValido) {
            throw new Error("Email inválido!")
        }

        if (nome.length < 3) {
            throw new Error("Nome curto!")
        }

        if (senha.length < 8) {
            throw new Error("Senha curto!")
        }

        const usuarioExistente = await client.usuario.findFirst({
            where: {
                email
            }
        });

        if (usuarioExistente) {
            throw new Error("Email já cadastrado por outro usaurio!")
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
}