import { CategoriaEnum } from "@prisma/client";
import { client } from "../../prisma/client";

export class DicaCasosDeUso {
    async listarDicas() {
        const dicas = await client.dica.findMany();

        return dicas;
    }

    async filtarDicasCategoria(categoria: string) {
        var categoriaEnum;
        switch (categoria) {
        case "CUIDADO":
            categoriaEnum = CategoriaEnum.CUIDADO
        case "EXERCICIO":
            categoriaEnum = CategoriaEnum.EXERCICIO
        case "NUTRICAO":
            categoriaEnum = CategoriaEnum.NUTRICAO
        case "TREINAMENTO":
            categoriaEnum = CategoriaEnum.TREINAMENTO
    }
        const dicas = await client.dica.findMany({
            where: {
                categoria: categoriaEnum
            }
        });

        return dicas;
    }
}