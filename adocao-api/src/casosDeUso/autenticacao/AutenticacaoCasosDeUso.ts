import { compare } from "bcryptjs";
import { verify } from "jsonwebtoken";
import { client } from "../../prisma/client";
import { EnviarEmail } from "../../provedores/envioDeEmail";
import { GeradorDeTokenProvedor } from "../../provedores/geradorDeToken";
import { indentificarAutorToken } from "../../provedores/indentificarAutorToken";

interface AutenticacaoUsuario {
    email: string;
    senha: string;
}
export class AutenticacaoCasosDeUso {
    async autenticarUsuario({ email, senha }: AutenticacaoUsuario) {
        const usuarioExistente = await client.usuario.findFirst({
            where: {
                email
            }
        });

        if (!usuarioExistente) {
            throw new Error("Usuário ou senha incorreto!");
        }

        const senhaCorreta = await compare(senha, usuarioExistente.senha);

        if (!senhaCorreta) {
            throw new Error("Usuário ou senha incorreto!");
        }

        const geradorDeTokenProvedor = new GeradorDeTokenProvedor();
        const token = await geradorDeTokenProvedor.gerar(usuarioExistente.id);
        return { token };
    }

    async recuperacaoDeConta({ email }: RecuperacaoDeContaProps) {
        const usuarioExistente = await client.usuario.findFirst({
            where: {
                email
            }
        });

        if (!usuarioExistente) {
            throw new Error("Usuário existente!");
        }

        const geradorDeToken = new GeradorDeTokenProvedor();
        const tokenDeRecuperacao = await geradorDeToken.gerar(usuarioExistente.id);


        await client.recuperacao.create({
            data: {
                usuarioId: usuarioExistente.id,
                token: tokenDeRecuperacao
            }
        })


        const enviarEmail = new EnviarEmail();
        await enviarEmail.enviar({
            subject: 'Recuperação de conta no adocão!',
            nome: usuarioExistente.nome,
            email,
            corpo: [
                '<div style="font-famaly: sans-serif; font-size: 16px; color: #111;">',
                `<h1>Código de recuperação: ${tokenDeRecuperacao}</h1>`,
                `<p></p>`,
                '</div>'
            ].join('\n')
        })
    }

    async verificarTokenDeRecuperacao({ tokenDeRecuperacao }: VerificarTokenDeRecuperacaoProps) {
            const decoded = await indentificarAutorToken(tokenDeRecuperacao);
            if (!decoded) {
                throw new Error("Token inválido!");
            }
            const geradorDeToken = new GeradorDeTokenProvedor();
            const token = await geradorDeToken.gerar(decoded.toString());
            client.recuperacao.update({
                where: {
                    id: decoded.toString()
                },
                data: {
                    token: null
                }
            });
            
            return { token };
    }

}
interface RecuperacaoDeContaProps {
    email: string;
}


interface VerificarTokenDeRecuperacaoProps {
    tokenDeRecuperacao: string;
}
