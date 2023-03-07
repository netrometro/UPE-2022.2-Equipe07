import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ValidarAutenticacao(request: Request, response: Response, next: NextFunction) {
    const autorToken = request.headers.authorization;

    if (!autorToken) {
        return response.status(401).json({
            message: "Token ausente!"
        });
    }

    const [, token] = autorToken.split(" ");

    try {
        verify(token, "aa0aae8f-505d-408f-83a5-c71cebc1349b");
        return next();
    } catch (err) {
        return response.status(401).json({
            message: "Token inválido!"
        });
    }
}