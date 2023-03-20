import { request, response } from "express";
import { client } from "../../prisma/client";
import { indentificarAutorToken } from "../../provedores/indentificarAutorToken";


interface CriarPost { 
    usuarioId: string;
    token: string;
    imageURL: string;
    descricao: string;
}
export class PostCasosDeUso {
    async criarPost({token, imageURL, descricao, usuarioId }: CriarPost) {
        const id = await indentificarAutorToken(token);
        if (!id) {
            throw new Error("Token inválido!");
        }
        
        const post = await client.post.create({
            
            data: {
                usuarioId,
                imageURL,
                descricao
            }

        });

        if (post) {
            return response.json({message: 'Postagem criada com sucesso'})
        }
    
        if (post) {
            throw new Error("Erro ao criar Postagem");
        }
    }

    async pegarPost(token: string) {
        const id = await indentificarAutorToken(token);
            if (!id) {
                throw new Error("Token inválido!");
            }
    
            const posts = await client.post.findFirst({
                where: {
                    id:id.toString()
                }
            })
    
            if (!posts) {
                throw new Error("postagem não encontrada");
            }
    };
}
export default PostCasosDeUso