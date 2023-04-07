import { DicaCasosDeUso } from "./DicaCasosDeUso";

class DicaControle {
    async listarDicas(request: Request, response: Response) {
        const dicaCasosDeUso = new DicaCasosDeUso();
        const dicas = await dicaCasosDeUso.listarDicas();
        
        return dicas;
    }
}