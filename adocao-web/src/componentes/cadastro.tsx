import { useState } from "react";

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepeticao, setSenhaRepeticao] = useState("");
  const validacaoEmail = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;

  return (
    <div>
      <div>
        <h1>Cadastro</h1>
        <span>
          Já tem conta?
          <button type="button" onClick={() => console.log("Login")}>
            Login
          </button>
        </span>
        <form onSubmit={() => console.log("Submicao")}>
          <span>Nome *</span>
          <input
            type="text"
            onChange={(event) => setNome(event.target.value)}
          />

          <span>Descrição</span>
          <input
            type="text"
            onChange={(event) => setDescricao(event.target.value)}
          />

          <span>Email *</span>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />

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
            disabled={
              senha.length < 8 ||
              !validacaoEmail.test(email) ||
              senha !== senhaRepeticao ||
              nome.length < 5
            }
            onClick={(event) => {
              event.preventDefault();
              console.log(nome, email, senha, descricao);
            }}
          >
            Cadastra-se
          </button>
        </form>
      </div>
    </div>
  );
}
