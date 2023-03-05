import { Request, Response } from "express";
import { AutenticacaoCasosDeUso } from "./AutenticacaoCasosDeUso";

export class AutenticacaoControle {
    async autenticarUsuario(request: Request, response: Response) {
        const { email, senha } = request.body;

        const autenticacaoCasosDeUso = new AutenticacaoCasosDeUso();

        const token = await autenticacaoCasosDeUso.autenticarUsuario({
            email,
            senha
        });

        return response.json(token);
    }
}