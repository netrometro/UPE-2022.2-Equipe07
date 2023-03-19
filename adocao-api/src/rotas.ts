import { Router } from "express";
import { AutenticacaoControle } from "./casosDeUso/autenticacao/AutenticacaoControle";
import { ParceirosControle } from "./casosDeUso/parceiro/parceirosControle";
import PostControle from "./casosDeUso/post/PostControle";
import { UsuarioControle } from "./casosDeUso/usuario/UsuarioControle";
import { ValidarAutenticacao } from "./intermediarios/ValidarAutenticacao";

const rotas = Router();

const usuarioControle = new UsuarioControle();
rotas.post("/usuarios/cadastro", usuarioControle.cadastrarUsuario);
rotas.put("/usuarios/senha",ValidarAutenticacao, usuarioControle.atualizarSenha);
rotas.get("/perfil",ValidarAutenticacao, usuarioControle.buscarMeuPerfil);
rotas.put("/perfil",ValidarAutenticacao, usuarioControle.atualizarCadastro);


const autenticacaoControle = new AutenticacaoControle();
rotas.post("/autenticacao", autenticacaoControle.autenticarUsuario);
rotas.post("/recuperacao", autenticacaoControle.recuperacaoDeConta);
rotas.post("verificacao", autenticacaoControle.verficacarTokenDeRecuperacao);


const postControle = new PostControle();
rotas.post('/post/criar', postControle.criarPost);
rotas.get("/post/:postId", postControle.pegarTudo);

const parceirosControle = new ParceirosControle();
rotas.get("/parceiros", parceirosControle.listarParceiros);

export{ rotas };