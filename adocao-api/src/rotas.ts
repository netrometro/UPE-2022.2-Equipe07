import { Router } from "express";
import { UsuarioCasosDeUso } from "./casosDeUso/usuario/UsuarioCasosDeUso";
import { UsuarioControle } from "./casosDeUso/usuario/UsuarioControle";

const rotas = Router();

const usuarioCasosDeUso = new UsuarioCasosDeUso();
const usuarioControle = new UsuarioControle();

rotas.post("/usuarios/cadastro", usuarioControle.cadastrarUsuario);


export{ rotas };