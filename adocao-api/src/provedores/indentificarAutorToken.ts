import { Payload } from "@prisma/client/runtime";
import { verify, decode } from "jsonwebtoken";

interface Decoded {
    id: string;
}

export async function indentificarAutorToken(token:string) {
    try {
        const decoded = verify(token, "aa0aae8f-505d-408f-83a5-c71cebc1349b").sub;
    
        return decoded;
    } catch (err) {
        return null;
    }
}