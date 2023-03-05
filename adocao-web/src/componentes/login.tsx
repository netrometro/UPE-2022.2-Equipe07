import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { validacaoEmail } from "../lib/validacaoDeEmail";

export function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Login</h1>
        <span>
          Não tem uma conta?
          <button type="button" onClick={() => navigate("cadastro")}>
            Crie Agora
          </button>
        </span>
        <form onSubmit={() => console.log("Submicao")}>

          <span>Email</span>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <span>Senha</span>
          <input
            type="password"
            onChange={(event) => setSenha(event.target.value)}
          />

          <button
          type="submit"
          disabled={senha.length < 8 || !validacaoEmail.test(email)}
          >Login</button>

        </form>
      </div>
    </div>
  );
}
