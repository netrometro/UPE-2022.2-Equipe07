import Cookies from "js-cookie";
import { FormEvent, SetStateAction, useEffect, useState } from "react";
import CatImage from "../assets/catastronaut.svg";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";

export function InsercaoDeNovaSenha() {
  const [senha, setSenha] = useState("");
  const [senhaRepeticao, setSenhaRepeticao] = useState("");
  const [comunicao, setComunicao] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    const token  = Cookies.get("token");
    if (!token) {
        navigator("/semTokenNoInsercaoDeNovaSenha");
    }
  })

  async function mudarSenha(event: FormEvent) {
    event.preventDefault();
    setComunicao(true)
    await api.put("usuarios/senha", {
      novaSenha: senha
    }, {
      headers: {
        authorization: `Basic ${Cookies.get("token")}`
      }
    }).catch((err) => console.error(err))
  }

  return (
    <div className="flex justify-center h-screen items-center bg-[url('./assets/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-gray-200 p-6 flex items-center justify-center row w-5/6 rounded-xl shadow-lg h-5/6">
      <span className="w-70">
          <img src={CatImage} alt="cat_astronaut" className="w-96" />
        </span>
        <div className="m-10 min-w-[280px]">
        <h1 className="text-sky-900 font-sans font-medium text-4xl">Nova Senha</h1>
        <form onSubmit={(event) => mudarSenha(event)} className="grid col-auto">

          <span className="text-sky-800"> Senha *</span>
          <input
            type="password"
            onChange={(event: { target: { value: SetStateAction<string>; }; }) => setSenha(event.target.value)}
            className="rounded-md border-sky-800 border-2"
          />

          <span className="text-sky-800">Senha Novamente*</span>
          <input
            type="password"
            onChange={(event: { target: { value: SetStateAction<string>; }; }) => setSenhaRepeticao(event.target.value)}
            className="rounded-md border-sky-800 border-2"
          />
          <button
            type="submit"
            disabled={senha.length < 8 || senha !== senhaRepeticao}
            className="bg-orange-500 text-gray-800 rounded-md min-w-full my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
          >
            Login
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}
