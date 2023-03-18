import { Request, Response } from "express";
import { ParceirosCasosDeUso } from "./parceirosCasosDeUso";

export class ParceirosControle {
    async listarParceiros(request: Request, response: Response) {
        const parceirosCasosdeUso = new ParceirosCasosDeUso();

        const parceiros = await parceirosCasosdeUso.listarParceiros();

        return response.json(parceiros); 
    }
}