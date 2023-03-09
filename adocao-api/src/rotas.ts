import { Router } from "express";
import { AutenticacaoControle } from "./casosDeUso/autenticacao/AutenticacaoControle";
import { UsuarioControle } from "./casosDeUso/usuario/UsuarioControle";
import { ValidarAutenticacao } from "./intermediarios/ValidarAutenticacao";
import { AnimalControle } from "./casosDeUso/animal/AnimalControle";

const rotas = Router();

const usuarioControle = new UsuarioControle();
rotas.post("/usuarios/cadastro", usuarioControle.cadastrarUsuario);
rotas.put("/usuarios/senha",ValidarAutenticacao, usuarioControle.atualizarSenha);


const autenticacaoControle = new AutenticacaoControle();
rotas.post("/autenticacao", autenticacaoControle.autenticarUsuario);
rotas.post("/recuperacao", autenticacaoControle.recuperacaoDeConta);
rotas.post("verificacao", autenticacaoControle.verficacarTokenDeRecuperacao);

//rota nova colocada por antonio
const animalControle = new AnimalControle();
rotas.post("/animal/cadastro", animalControle.cadastrarAnimal);



export{ rotas };