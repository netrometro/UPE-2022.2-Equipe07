import { client } from "../../prisma/client";
import { indentificarAutorToken } from "../../provedores/indentificarAutorToken";

export class AnimalCasosDeUso {
    async buscarAnimaisFavoritos(token: string) {
        const usuarioId = await indentificarAutorToken(token);
        if (!usuarioId) {
            throw new Error("Token inválido!");
        }

        const usuarioExistente = await client.usuario.findFirst({
            where: {
                id:usuarioId.toString()
            }
        });

        if (!usuarioExistente) {
            throw new Error("Token inválido!");
        }

        const animaisFav = await client.usuarioAnimalFav.findMany({
            select: {
                animal: true
            },
            where: {
                usuarioId: usuarioId.toString()
            }
        })

        return animaisFav;
    }

    async adicionarAnimalFavoritos(token: string, animalId: number ) {
        const usuarioId = await indentificarAutorToken(token);
        if (!usuarioId) {
            throw new Error("Token inválido!");
        }

        const usuarioExistente = await client.usuario.findFirst({
            where: {
                id:usuarioId.toString()
            }
        });

        if (!usuarioExistente) {
            throw new Error("Token inválido!");
        }

        const animalExistente = await client.animal.findFirst({
            where: {
                id: animalId
            }
        })

        if (!animalExistente) {
            throw new Error("Animal não encontrado!");
        }

        const usuarioAnimalFavExistente = await client.usuarioAnimalFav.findFirst({
            where: {
                animalId,
                usuarioId: usuarioId.toString()
            }
        })

        if(usuarioAnimalFavExistente) {
            throw new Error("Animal já é favorito desse usuário!")
        }

        await client.usuarioAnimalFav.create({
            data: {
                usuarioId: usuarioId.toString(),
                animalId
            }
        })
    }

    async removerAnimalFavoritos(token: string, animalId: number ) {
        const usuarioId = await indentificarAutorToken(token);
        if (!usuarioId) {
            throw new Error("Token inválido!");
        }

        const usuarioExistente = await client.usuario.findFirst({
            where: {
                id:usuarioId.toString()
            }
        });

        if (!usuarioExistente) {
            throw new Error("Token inválido!");
        }

        const animalExistente = await client.animal.findFirst({
            where: {
                id: animalId
            }
        })

        if (!animalExistente) {
            throw new Error("Animal não encontrado!");
        }

        const usuarioAnimalFavExistente = await client.usuarioAnimalFav.findFirst({
            where: {
                animalId,
                usuarioId: usuarioId.toString()
            }
        })

        if(!usuarioAnimalFavExistente) {
            throw new Error("Animal já não é favorito desse usuário!")
        }

        const usuarioIdString = usuarioId.toString()

        await client.usuarioAnimalFav.delete({
            where: {
                animalId_usuarioId: {
                    animalId: animalId,
                    usuarioId: usuarioId.toString()
                  }
            }
        })
    }

    async listarAnimais() {
        const animais = await client.animal.findMany();

        return animais;
    }

    async buscarAnimal(id: number) {
        const animal = await client.animal.findFirst({
            where: {
                id: id
            }
        })

        return animal;
    }


}