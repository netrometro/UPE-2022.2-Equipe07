import { DicaCasosDeUso } from "./DicaCasosDeUso";
import { Request, Response } from "express";

export class DicaControle {
    async listarDicas(request: Request, response: Response) {
        const dicaCasosDeUso = new DicaCasosDeUso();
        const dicas = await dicaCasosDeUso.listarDicas();
        
        return response.json(dicas);
    }

    async filtrarDicasCategoria(request: Request, response: Response) {
        const { categoria } = request.params;
        const dicaCasosDeUso = new DicaCasosDeUso();
        const dicas = await dicaCasosDeUso.filtarDicasCategoria(categoria);

        return response.json(dicas);
    }
}