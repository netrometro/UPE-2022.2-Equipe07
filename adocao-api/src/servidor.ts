import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { rotas } from "./rotas";

const app = express();

app.use(express.json());

app.use(rotas);

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        return response.json({
            status: "Error",
            message: error.message
        });
    }
);


app.listen(3000, () => console.log("Servidor rodando na porta 3000"));