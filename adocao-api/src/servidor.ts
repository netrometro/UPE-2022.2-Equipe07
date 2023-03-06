import express from "express";
import { rotas } from "./rotas/rotas";
import bodyParser from 'body-parser';
const cors = require('cors');
const morgan = require('morgan');
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());

app.use(rotas);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

const postRoutes = require('./rotas/postagemRotas');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/posts', postRoutes);