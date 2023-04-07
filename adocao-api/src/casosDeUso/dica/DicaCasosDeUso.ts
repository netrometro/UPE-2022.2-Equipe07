import { client } from "../../prisma/client";

export class DicaCasosDeUso {
    async listarDicas() {
        const dicas = await client.dica.findMany();

        return dicas;
    }
}