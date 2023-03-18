import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import { rotas } from "./rotas";

const app = express();

app.use(cors());

app.use(express.json());

app.use(rotas);

app.get('/', (req,res) => {
    res.send('Bem-Vindos ao AdoCão!')
})

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        return response.status(400).json({
            status: "Error",
            message: error.message
        });
    }
);


app.listen(3333, () => console.log("Servidor rodando na porta 3333"));