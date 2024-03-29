import { Router } from "express";
import { AnimalControle } from "./casosDeUso/animal/AnimalControle";
import { AutenticacaoControle } from "./casosDeUso/autenticacao/AutenticacaoControle";
import { ParceirosControle } from "./casosDeUso/parceiro/parceirosControle";
import PostControle from "./casosDeUso/post/PostControle";
import { UsuarioControle } from "./casosDeUso/usuario/UsuarioControle";
import { ValidarAutenticacao } from "./intermediarios/ValidarAutenticacao";
import { DicaControle } from "./casosDeUso/dica/DicaControle";
import { ComentarioDicaControle } from "./casosDeUso/comentarioDica/ComentarioDicaControle";

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

const animalControle = new AnimalControle();
rotas.get("/animais", animalControle.listarAnimais)
rotas.get("/animais/:id", animalControle.buscarAnimal)
rotas.get("/perfil/animais", ValidarAutenticacao, animalControle.buscarAnimaisFav)

rotas.put("/perfil/animal/:animalId", ValidarAutenticacao, animalControle.adicionarAnimalFavoritos);
rotas.delete("/perfil/animal/:animalId", ValidarAutenticacao, animalControle.removerAnimalFavoritos);

const dicaControle = new DicaControle();
rotas.get("/dicas", dicaControle.listarDicas);
rotas.get("/dica/:id", dicaControle.buscarDica);
rotas.get("/dicas/:categoria", dicaControle.filtrarDicasCategoria);

const comentarioDicaControle = new ComentarioDicaControle;
rotas.get("/comentarios/dicas/:id", comentarioDicaControle.buscarComentariosDicas);

export{ rotas };