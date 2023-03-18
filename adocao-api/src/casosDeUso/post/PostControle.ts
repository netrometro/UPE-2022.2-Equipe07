import { Request, Response } from "express";
import { client } from "../../prisma/client";

export class CriarPostagem {
    async criarPost(req: Request, res: Response) {
        try {
            const { imageURL, descricao, usuarioId } = req.body;


            const post = await client.post.create({
                data: { 
                        imageURL,
                        descricao,
                        usuarioId,

            }});

            if (post) {
                return res.json({message: 'postagem criada com sucesso'})
            }

            res.status(201).json(post);
        } catch(erro) {
            console.error(erro);
            res.status(500).json({erro: 'erro ao criar postagem'});
        }
    };

    async pegarTudo (req: Request, res: Response) {
        try {
            const { postId } = req.params;
            
            const posts = await client.post.findUnique({
                where: {
                    postId: parseInt(postId),
                }
            });
            
            res.status(200).json(posts);
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ error: 'postagem não encontrada' });
        }
    };
}

export default CriarPostagem
