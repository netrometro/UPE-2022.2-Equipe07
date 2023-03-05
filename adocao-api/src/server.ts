import express from "express";
import { prisma } from './prisma';

const app = express();

app.use(express.json());

//funcao pra saber quando o servidor upou certinho e pam
app.listen(3333, () => {
        console.log("### O HTTP Servidor esta Rodando Normalmente!!!")
    }
);

//-->Acesso ao perfil do animal
app.get('/perfilanimal', 
    async (req, res)=>{
        return res.send("Aqui tem acesso ao perfil do animal!MAS Faltou mandar o id do cachorro");
    }
);
//Acesso ao Perfil do Animal atraves de um parametro ID na URL
app.get('/perfilanimal/:id', 
    async (req, res) => {
        const id = parseInt(req.params.id);
        const cachorro_encotrado = await prisma.animal.findUnique({
            where: {
                id: Number(id)
            }
        });

    return res.status(302).json({ data: cachorro_encotrado }); //esse status 302 é o Status FOUND no http
});



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
        const {nome, raca, id_dono, idade, genero, personalidade, necessidadesMedicas, necessidadesComportamentais } = req.body
        //usando desestruturaçao eu nao preciso usar req.body.*propriedade_desejada;

        const animal = await prisma.animal.create({
            data: {
                nome: nome,
                raca: raca,
                id_dono: id_dono,
                idade: idade,
                genero: genero,
                personalidade: personalidade,
                necessidadesMedicas: necessidadesMedicas,
                necessidadesComportamentais: necessidadesComportamentais,
                //fotos: Foto[],
            }
        });

        return res.status(201).json({ data: animal }); //esse status 201 é um codigo HTTP para um create
    }
);


