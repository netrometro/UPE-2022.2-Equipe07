import { CategoriaEnum } from "@prisma/client";
import { client } from "../../prisma/client";

export class DicaCasosDeUso {
    async listarDicas() {
        const dicas = await client.dica.findMany();

        return dicas;
    }

    async buscarDica(id: number) {
        const dica = await client.dica.findFirst({
            where: {
                id
            }
        });

        return dica;
    }

    async filtarDicasCategoria(categoria: string) {
        var categoriaEnum;
        switch (categoria) {
        case "CUIDADO":
            categoriaEnum = CategoriaEnum.CUIDADO
            break
        case "EXERCICIO":
            categoriaEnum = CategoriaEnum.EXERCICIO
            break
        case "NUTRICAO":
            categoriaEnum = CategoriaEnum.NUTRICAO
            break
        case "TREINAMENTO":
            categoriaEnum = CategoriaEnum.TREINAMENTO
            break
    }
        const dicas = await client.dica.findMany({
            where: {
                categoria: categoriaEnum
            }
        });

        return dicas;
    }
}