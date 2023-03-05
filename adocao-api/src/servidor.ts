import express from "express";
import { rotas } from "./rotas/rotas";

const app = express();

app.use(express.json());

app.use(rotas);

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));