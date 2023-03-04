import express from "express";
import { prisma } from './prisma';

const app = express();

app.use(express.json());

//funcao pra saber quando o servidor upou certinho e pam
app.listen(3333, () => {
        console.log("### O HTTP Servidor esta Rodando Normalmente!!!")
    }
);

//Acesso ao perfil do animal
app.get('/perfilanimal', 
    async (req, res)=>{
        


        return res.send("Aqui tem acesso ao perfil do animal");
    }
);


//->Cadastro de um novo animal
//acesso ao formulario
app.get('/animal/new', 
     async (req,res) => {
        return res.send("Aqui tem acesso Formulario do novo animal");
    }
);

//post do formulario
app.post('/animal/new/p',
   async (req,res) =>{
        const {nome, raca} = req.body
        //usando desestruturaçao eu nao preciso usar req.body.*propriedade_desejada;

        const animal = await prisma.animal.create({
            data: {
                nome: nome,
                raca: raca,
                id_dono: 0,
                idade: 0,
                genero: "gereno_gereno",
                personalidade: "personalidade_personalidade",
                necessidadesMedicas: "medicos_medicos",
                necessidadesComportamentais: "comportamentos_comportamentos",
                //fotos: Foto[],
            }
        });

        return res.status(201).json({ data: animal }); //esse status 201 é um codigo HTTP para um create
    }
);

