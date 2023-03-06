import { Request, Response } from "express";
import { UsuarioCasosDeUso } from "./UsuarioCasosDeUso";

export class UsuarioControle {

    async cadastrarUsuario(request: Request, response: Response) {
        const { nome, descricao, email, senha } = request.body;

        const usuarioCasosDeUso = new UsuarioCasosDeUso();

        await usuarioCasosDeUso.cadastrar({
            nome,
            descricao,
            email,
            senha
        });

        return response.status(201).json();
    }

    async atualizarSenha(request: Request, response: Response) {
        const { novaSenha } = request.body;
        const autorToken = request.headers.authorization;
        
        if (!autorToken) {throw new Error("Sem token!")};
        const [ ,token] = autorToken.split(" ");

        const usuarioCasosDeUso = new UsuarioCasosDeUso();
        await usuarioCasosDeUso.atualizarSenha({ token, novaSenha });

        return response.status(200).json();
    }
}