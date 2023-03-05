import { useState } from "react";
import { useNavigate } from "react-router-dom"

export function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacaoEmail = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;
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
