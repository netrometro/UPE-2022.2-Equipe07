import { Request, Response } from "express";
import { UsuarioCasosDeUso } from "./UsuarioCasosDeUso";

export class UsuarioControle {

    async buscarMeuPerfil(request: Request, response: Response) {
        const autorToken = request.headers.authorization;
        
        if (!autorToken) {throw new Error("Sem token!")};
        const [ ,token] = autorToken.split(" ");
        
        const usuarioCasosDeUso = new UsuarioCasosDeUso();
        const {nome, nomeDeUsuario, descricao, criacao } = await usuarioCasosDeUso.buscarUsuario(token);
        return response.status(200).json({nome, nomeDeUsuario, descricao, criacao})
    }

    async cadastrarUsuario(request: Request, response: Response) {
        const { nome, descricao, email, senha, nomeDeUsuario } = request.body;

        const usuarioCasosDeUso = new UsuarioCasosDeUso();

        await usuarioCasosDeUso.cadastrar({
            nome,
            nomeDeUsuario,
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

    async atualizarCadastro(request: Request, response: Response) {
        const autorToken = request.headers.authorization;
        
        if (!autorToken) {throw new Error("Sem token!")};
        const [ ,token] = autorToken.split(" ");

        const { nome, descricao, nomeDeUsuario } = request.body;

        const usuarioCasosDeUso = new UsuarioCasosDeUso();

        await usuarioCasosDeUso.atualizarCadastro({ token, nome, nomeDeUsuario, descricao });

        return response.status(200).json();
        
    }
}