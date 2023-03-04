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
}