import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function InsercaoDeNovaSenha() {
  const [senha, setSenha] = useState("");
  const [senhaRepeticao, setSenhaRepeticao] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    const token  = Cookies.get("token");
    if (!token) {
        navigator("/");
    }
  })

  return (
    <div>
      <div>
        <h1>Nova Senha</h1>
        <form onSubmit={() => console.log("nova senha")}>

          <span> Senha *</span>
          <input
            type="password"
            onChange={(event) => setSenha(event.target.value)}
          />

          <span> Senha Novamente*</span>
          <input
            type="password"
            onChange={(event) => setSenhaRepeticao(event.target.value)}
          />
          <button
            type="submit"
            disabled={senha.length < 8 || senha !== senhaRepeticao}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
