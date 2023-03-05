import { compare } from "bcryptjs";
import { client } from "../../prisma/client";
import { GeradorDeTokenProvedor } from "../../providores/geradorDeToken";

interface AutenticacaoUsuario {
    email: string;
    senha: string;
}
export class AutenticacaoCasosDeUso {
    async autenticarUsuario({email, senha}: AutenticacaoUsuario) {
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
}