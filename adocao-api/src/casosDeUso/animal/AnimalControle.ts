import { Request, Response } from "express";
import { AnimalCasosDeUso } from "./AnimalCasosDeUso";

export class AnimalControle {
    async buscarAnimaisFav(request: Request, response: Response) {
        const autorToken = request.headers.authorization;
        
        if (!autorToken) {throw new Error("Sem token!")};
        const [ ,token] = autorToken.split(" ");

        const animalCasosDeUso = new AnimalCasosDeUso();
        const animaisFav = await animalCasosDeUso.buscarAnimaisFavoritos(token);

        return response.json(animaisFav);
    }

    async listarAnimais(request: Request, response: Response) {
        const animalCasosDeUso = new AnimalCasosDeUso();
        const animais = await animalCasosDeUso.listarAnimais();

        return response.json(animais);
    }

    async buscarAnimal(request: Request, response: Response) {
        const { id } = request.params
        const animalCasosDeUso = new AnimalCasosDeUso();
        const animal = await animalCasosDeUso.buscarAnimal(Number.parseInt(id));

        return response.json(animal);
    }

    async adicionarAnimalFavoritos(request: Request, response: Response) {
        const autorToken = request.headers.authorization;
        
        if (!autorToken) {throw new Error("Sem token!")};
        const [ ,token] = autorToken.split(" ");

        const { animalId } = request.params;
        const animalCasosDeUso = new AnimalCasosDeUso();
        await animalCasosDeUso.adicionarAnimalFavoritos(token, Number.parseInt(animalId));

        return response.json();
        
    }

    async removerAnimalFavoritos(request: Request, response: Response) {
        const autorToken = request.headers.authorization;
        
        if (!autorToken) {throw new Error("Sem token!")};
        const [ ,token] = autorToken.split(" ");

        const { animalId } = request.params;
        const animalCasosDeUso = new AnimalCasosDeUso();
        await animalCasosDeUso.removerAnimalFavoritos(token, Number.parseInt(animalId));

        return response.json();
        
    }

}