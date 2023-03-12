import { Request, Response } from "express";
import { AnimalCasosDeUso } from './AnimalCasosDeUso';

export class AnimalControle {

    async cadastrarAnimal(request: Request, response: Response) {
        const { nome, raca, idade, genero, personalidade, necessidadesMedicas, necessidadesComportamentais } = request.body;

        const animalCasosDeUso = new AnimalCasosDeUso();

        await animalCasosDeUso.cadastrarAnimal({
            nome: nome,
            raca: raca,
            idade: idade,
            genero: genero,
            personalidade: personalidade,
            necessidadesMedicas: necessidadesMedicas,
            necessidadesComportamentais: necessidadesComportamentais
        });

        return response.status(201).json();
    }
}