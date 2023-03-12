import { hash } from "bcryptjs";
import { client } from "../../prisma/client";
import { indentificarAutorToken } from "../../provedores/indentificarAutorToken";

interface CadastratoUsuario {
    nome: string;
    descricao: string | null;
    nomeDeUsuario: string;
    email: string;
    senha: string;
}

interface AtualizarSenhaProps {
    token: string;
    novaSenha: string;
}

interface AtualizarCadastroProps {
    token: string;
    nomeDeUsuario: string;
    nome: string;
    descricao: string | null;
}

export class UsuarioCasosDeUso {

    async buscarUsuario(token: string) {
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

        return usuarioExistente;
    }

    async cadastrar({ nome, nomeDeUsuario, descricao, email, senha }: CadastratoUsuario) {

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
                nomeDeUsuario,
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

    async atualizarCadastro({token, nomeDeUsuario, nome, descricao}: AtualizarCadastroProps) {
        const id = await indentificarAutorToken(token);
        if (!id) {
            throw new Error("Token inválido!");
        }

        const usuarioExistente = await client.usuario.findFirst({
            where: {
                id: id.toString()
            }
        });

        if (!usuarioExistente) {
            throw new Error("Token inválido!");
        }
        var nomeDeUsuarioExistente;
        if (usuarioExistente.nomeDeUsuario != nomeDeUsuario) {
        nomeDeUsuarioExistente = await client.usuario.findFirst({
            where: {
                nomeDeUsuario: nomeDeUsuario
            }
        });
    }

        if (nomeDeUsuarioExistente) {
            throw new Error("Esse nome de usuário já usado!");
        }

        await client.usuario.update({
            where: {
                id: id.toString()
            },
            data: {
                nome,
                nomeDeUsuario,
                descricao
            }
        })
    }
}