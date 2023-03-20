import { Request, Response } from "express";
import PostCasosDeUso from "./PostCasosDeUso";

export class PostControle {
    async pegarPost(request: Request, response: Response) {
        const autorToken = request.headers.authorization;
        
        if (!autorToken) {throw new Error("Sem token!")};
        const [ ,token] = autorToken.split(" ");

        const postCasosDeUso = new PostCasosDeUso();
        const pegarpost = await postCasosDeUso.pegarPost(token);

        return response.json(pegarpost); 
    }

    async criarPost(request: Request, response: Response) {
        const { imageURL, descricao, usuarioId } = request.body;
        const autorToken = request.headers.authorization;
        
        if (!autorToken) {throw new Error("Sem token!")};
        const [ ,token] = autorToken.split(" ");

        const postCasosDeUso = new PostCasosDeUso();
        await postCasosDeUso.criarPost({ token, imageURL, descricao, usuarioId });

        return response.status(200).json();
    }
}

export default PostControle