import { Router } from "express";
import { AutenticacaoControle } from "./casosDeUso/autenticacao/AutenticacaoControle";
import { UsuarioControle } from "./casosDeUso/usuario/UsuarioControle";

const rotas = Router();

const usuarioControle = new UsuarioControle();
rotas.post("/usuarios/cadastro", usuarioControle.cadastrarUsuario);

const autenticacaoControle = new AutenticacaoControle();
rotas.post("/autenticacao", autenticacaoControle.autenticarUsuario);
rotas.post("/recuperacao", autenticacaoControle.recuperacaoDeConta);
rotas.post("verificacao", autenticacaoControle.verficacarTokenDeRecuperacao);


export{ rotas };