import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import CatImage from "../assets/catastronaut.svg";
import { validacaoEmail } from "../lib/validacaoDeEmail";
import { CabecalhoHome } from "../componentes/cabecalhoHome";

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [nomeDeUsuario, setNomeDeUsuario] = useState("");
  const [descricao, setDescricao] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepeticao, setSenhaRepeticao] = useState("");
  const [comunicao, setComunicao] = useState(false);
  const navigate = useNavigate();

  async function cadastrarUsuario(event: FormEvent) {
    event.preventDefault();

    setComunicao(true);

    await api
      .post("usuarios/cadastro", {
        nome,
        descricao,
        nomeDeUsuario,
        email,
        senha,
      })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));

    setComunicao(false);

  }

  return (
    <div>
    <CabecalhoHome />
    <div className="flex justify-center h-screen items-center bg-[url('./assets/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-gray-200 p-6 flex items-center justify-center row w-5/6 rounded-xl shadow-lg h-5/6">
        <span className="w-70">
          <img src={CatImage} alt="cat_astronaut" className="w-96" />
        </span>
        <div className="m-10 min-w-[280px]">
          <h1 className="text-sky-900 font-sans font-medium text-4xl">
            Cadastro
          </h1>
          <span className="text-sky-900 text-sm">
            Já tem conta?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-orange-600 underline-offset-2 hover:underline"
            >
              Login
            </button>
          </span>
          <form className="grid col-auto">
            <span className="text-sky-800">Nome *</span>
            <input
              type="text"
              onChange={(event) => setNome(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />

<span className="text-sky-800">Nome de usuario *</span>
            <input
              type="text"
              onChange={(event) => setNomeDeUsuario(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />

            <span className="text-sky-800">Descrição</span>
            <textarea
              onChange={(event) => setDescricao(event.target.value)}
              className="rounded-md border-sky-800 border-2 min-w-[280px] w-full min-h-[112px] text-sm scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
              placeholder="Faz uma breve descrição sobre você..."
            />

            <span className="text-sky-800">Email *</span>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-md border-sky-800 border-2 "
            />

            <span className="text-sky-800"> Senha *</span>
            <input
              type="password"
              onChange={(event) => setSenha(event.target.value)}
              className="rounded-md border-sky-800 border-2 "
            />

            <span className="text-sky-800"> Senha Novamente*</span>
            <input
              type="password"
              onChange={(event) => setSenhaRepeticao(event.target.value)}
              className="rounded-md border-sky-800 border-2 "
            />

            <button
              type="submit"
              disabled={
                senha.length < 8 ||
                !validacaoEmail.test(email) ||
                senha !== senhaRepeticao ||
                nome.length < 5
              }
              onClick={(event) => cadastrarUsuario(event)}
              className="bg-orange-500 text-gray-800 rounded-md min-w-full my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
            >
              Cadastra-se
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
