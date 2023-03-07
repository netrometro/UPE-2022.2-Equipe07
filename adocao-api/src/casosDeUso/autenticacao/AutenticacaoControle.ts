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

        return response.status(200).json(token);
    }

    async recuperacaoDeConta(request: Request, response: Response) {
        const { email } = request.body;

        const autenticacaoCasosDeUso = new AutenticacaoCasosDeUso();

        autenticacaoCasosDeUso.recuperacaoDeConta({ email });

        return response.status(200).json();
    }

    async verficacarTokenDeRecuperacao(request: Request, response: Response) {
        const { tokenDeRecuperacao } = request.body;

        const autenticacaoCasosDeUso = new AutenticacaoCasosDeUso();

        const token = autenticacaoCasosDeUso.verificarTokenDeRecuperacao(tokenDeRecuperacao);

        return response.status(200).json(token);
    }
}