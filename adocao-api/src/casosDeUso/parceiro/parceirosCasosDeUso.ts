import { client } from "../../prisma/client";

export class ParceirosCasosDeUso {
    async listarParceiros() {
        return await client.parceiro.findMany();
    }
}