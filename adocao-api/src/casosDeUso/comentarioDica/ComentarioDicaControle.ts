import { Request, Response } from "express";
import { ComentarioDicaCasosDeUso } from "./ComentarioDicaCasosDeUso";

export class ComentarioDicaControle {
    async buscarComentariosDicas(request: Request, response: Response) {
        const { id } = request.params;
        const comentarioDicaCasosDeUso = new ComentarioDicaCasosDeUso();

        const comentarios = await comentarioDicaCasosDeUso.buscarComentariosDicas(Number.parseInt(id));

        return response.json(comentarios);
    }
}