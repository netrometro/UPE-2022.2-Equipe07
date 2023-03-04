import express from "express";

const app = express();

app.listen(3333, () => {
        console.log("### O HTTP Servidor esta Rodando Normalmente!!!")
    }
);

app.get('/perfilanimal', 
    (req, res)=>{
        return res.send("Hello World!")
    }
);