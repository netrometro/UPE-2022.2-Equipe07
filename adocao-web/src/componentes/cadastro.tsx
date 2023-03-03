import { useState } from "react";

export function Cadastro() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
  const [senhaRepeticao, setSenhaRepeticao] = useState("");
  const validacaoEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    return (
        <div>
            <div>
                <h1>Cadastro</h1>
                <span>
                    Já tem conta?
                    <button type="button" onClick={() => console.log("Login")}>Login</button>
                </span>
                <form onSubmit={() => console.log("Submicao")}>
                    <span>Nome *</span>
                    <input type="text" onChange={(event) => setNome(event.target.value)} />

                    <span>Descrição</span>
                    <input type="text" onChange={(event) => setDescricao(event.target.value)} />

                    <span>Email *</span>
                    <input type="email" onChange={(event) => setEmail(event.target.value)} />

                    <span> Senha *</span>
                    <input type="password" onChange={(event) => setSenha(event.target.value)} />

                    <span> Senha Novamente*</span>
                    <input type="password" onChange={(event) => setSenhaRepeticao(event.target.value)} />

                    <button type="submit"
                    disabled={senha.length < 8 || validacaoEmail.exec(email) != null || senha !== senhaRepeticao || nome.length < 5}
                    onClick={(event) =>{event.preventDefault(); console.log(nome, email, senha, descricao)}}>Cadastra-se</button>
                </form>
            </div>
        </div>
    );
}