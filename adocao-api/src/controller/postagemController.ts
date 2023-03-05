const express = require('express');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

const criarPostagem = async (req: any, res: any) => {
    try {
        const { descricao, imageURL, userId } = req.body;

        const post = await prisma.post.create({
            data: {
                descricao
,
                imageURL,
                userId: Number(userId),
            },
        });

        if (post) {
            return res.json({message: 'postagem criada com sucesso'})
        }
        res.status(201).json(post);
    } catch(error) {
        console.error(error);
        res.status(500).json({error: 'erro ao criar postagem'});
    }
};

const buscarPostagemPorId = async (req: any, res: any) => { const { id } = req.params;
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (post) {
            res.json(post);
        } else {
            res.status(404).json({error: 'postagem não foi encontrada pelo sistema'});
        }
    }   catch (error) {
        console.error(error);
        res.status(500).json({error: "erro ao buscar postagem"});
    }
};

const atualizarPostagem = async (req: any, res: any) => { const { id } = req.params; const { descricao, imageURL } = req.body;
    try {
        const post = await prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                descricao
,
                imageURL,
            },
        });
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'erro ao atualizar postagem'});
    }
};

const deletarPostagem = async (req: any, res: any) => { const { id } = req.params;
    try {
        const post = await prisma.post.delete({
            where: {
                id: Number(id),
            },
        });
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'erro ao deletar postagem'});
    }
};

module.exports = { criarPostagem, buscarPostagemPorId, atualizarPostagem, deletarPostagem }