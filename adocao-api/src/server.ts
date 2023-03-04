import express from "express";

const app = express();

//funcao pra saber quando o servidor upou certinho e pam
app.listen(3333, () => {
        console.log("### O HTTP Servidor esta Rodando Normalmente!!!")
    }
);

//Acesso ao perfil do animal
app.get('/perfilanimal', 
    (req, res)=>{
        return res.send("Aqui tem acesso ao perfil do animal");
    }
);


//->Cadastro de um novo animal
//acesso ao formulario
app.get('/animal/new', 
    (req,res) => {
        return res.send("Aqui tem acesso Formulario do novo animal");
    }
);

//post do formulario
app.post('/animal/new/processando',
    (req,res) =>{
        return res.send("Aqui ocorre o processo de cadastro e atualizaçao dos objetos e tabelas do BD")
    }
);

