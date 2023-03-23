import Cookies from "js-cookie";
import { FormEvent, SetStateAction, useState } from "react";
import CatImage from "../assets/catastronaut.svg";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";
import { CabecalhoHome } from "../cabecalhoHome";
import { validacaoEmail } from "../../lib/validacaoDeEmail";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [comunicao, setComunicao] = useState(false);
  const navigate = useNavigate();

  async function Logar(event: FormEvent) {
    event.preventDefault();

    setComunicao(true);
    Cookies.remove("token");
    
    await api.post("autenticacao", {
      email,
      senha
    }).then((response: { data: { token: string; }; }) =>{
      Cookies.set("token", response.data.token, {expires: 1})
      setComunicao(false);
      navigate("/");
      // Navegate para dentro de algo
    })
    .catch((err: any) => console.log(err));

    setComunicao(false);
  }

  return (
    <div>
      <CabecalhoHome />
    <div className="flex justify-center h-[90vh] items-center bg-[url('./assets/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-gray-200 p-6 flex items-center justify-center row w-5/6 rounded-xl shadow-lg h-5/6">
        <span className="w-70">
          <img src={CatImage} alt="cat_astronaut" className="w-96" />
        </span>
        <div className="m-10 min-w-[280px]">
          <h1 className="text-sky-900 font-sans font-medium text-4xl">Login</h1>
          <span className="text-sky-900 text-sm">
            Não tem uma conta?
            <button
              type="button"
              onClick={() => navigate("/cadastro")}
              className="text-orange-600 underline-offset-2 hover:underline"
            >
              Crie Agora
            </button>
          </span>
          <form onSubmit={(event) => Logar(event)} className="grid col-auto">
            <span className="text-sky-800 ">Email</span>
            <input
              type="email"
              onChange={(event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)}
              className="rounded-md border-sky-800 border-2 "
            />

            <span className="text-sky-800">Senha</span>
            <input
              type="password"
              onChange={(event: { target: { value: SetStateAction<string>; }; }) => setSenha(event.target.value)}
              className="rounded-md border-sky-800 border-2 "
            />

            <button
              type="button"
              onClick={() => navigate("/recuperacao")}
              className="text-orange-600 underline-offset-2 hover:underline place-self-start"
            >
              Esqueci a senha
            </button>

            <button
              type="submit"
              disabled={senha.length < 8 || !validacaoEmail.test(email)}
              className="bg-orange-500 text-gray-800 rounded-md min-w-full my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
              onClick={(event) => Logar(event)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
