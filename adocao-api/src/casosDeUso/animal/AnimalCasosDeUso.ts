import { hash } from "bcryptjs";
import { client } from "../../prisma/client";
import { indentificarAutorToken } from "../../provedores/indentificarAutorToken";

interface CadastratoAnimal {
    nome: string;
    raca: string;
    genero: string | null; 
    idade: string | null; 
    personalidade: string | null; 
    necessidadesMedicas: string | null; 
    necessidadesComportamentais: string | null;
}

export class AnimalCasosDeUso {

    async cadastrarAnimal({ nome, raca, genero, idade, personalidade, necessidadesMedicas, necessidadesComportamentais }: CadastratoAnimal){

        await client.animal.create({
            data: {
                nome: nome, 
                raca: raca,
                genero: genero, 
                idade: idade, 
                personalidade: personalidade, 
                necessidadesMedicas: necessidadesMedicas, 
                necessidadesComportamentais: necessidadesComportamentais,
            }
        });
    }

}