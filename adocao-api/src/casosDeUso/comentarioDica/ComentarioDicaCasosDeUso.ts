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
            }
        });

        var comentariosUsuarios: ComentariosUsuarios[] =  [];

        comentarios.map(async comentario => {
            const usuario = await client.usuario.findFirst({
                where: {
                    id: comentario.usuarioId
                }
            });
            comentariosUsuarios.concat([{comentario, usuario}]);
        })

        return comentariosUsuarios;
    }
}