import { ComentarioDica, Usuario } from "@prisma/client";
import { client } from "../../prisma/client";

interface ComentariosUsuarios {
    comentario: ComentarioDica
    usuario: Usuario | null;
}

export class ComentarioDicaCasosDeUso {
    async buscarComentariosDicas(id: number) {
        const comentarios = await client.comentarioDica.findMany({
            where: {
                dicaId: id
            },
            include: {
                usuario: true,
            }
        });


        return comentarios;
    }

}