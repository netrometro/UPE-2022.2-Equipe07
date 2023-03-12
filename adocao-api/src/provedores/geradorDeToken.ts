import { sign } from "jsonwebtoken";

export class GeradorDeTokenProvedor {
    async gerar(idUsuario: string) {
        const token = sign({}, "aa0aae8f-505d-408f-83a5-c71cebc1349b", {
            subject: idUsuario,
            expiresIn: "1d"
        });

        return token;
    }
}