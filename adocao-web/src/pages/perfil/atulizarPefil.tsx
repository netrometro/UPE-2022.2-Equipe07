import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";

interface UsuarioProps {
    nome: string;
    nomeDeUsuario: string;
    descricao: string | null;
}
export function AtualizarPerfil({nome, nomeDeUsuario, descricao }: UsuarioProps) {
    const [nomeAtual, setNome] = useState(nome);
    const [nomeDeUsuarioAtual, setNomeDeUsuario] = useState(nomeDeUsuario);
    const [descricaoAtual, setDescricao] = useState(descricao);
    const [comunicao, setComunicao] = useState(false);
    const navigate = useNavigate();

    function atualizarPerfil(event: FormEvent) {
        event.preventDefault()
        setComunicao(true);
        api.put("");
        setComunicao(false);
    }

    return (
        <div className="bg-gray-200 p-6 flex items-center justify-center row w-5/6 rounded-xl shadow-lg h-5/6">
        <form className="grid col-auto">
            <span className="text-sky-800">Nome</span>
            <input
            value={nome}
              type="text"
              onChange={(event) => setNome(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />

<span className="text-sky-800">Nome de usuario</span>
            <input
            value={nomeDeUsuario}
              type="text"
              onChange={(event) => setNomeDeUsuario(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />

            <span className="text-sky-800">Descrição</span>
            <textarea
            value={descricao || ""}
              onChange={(event) => setDescricao(event.target.value)}
              className="rounded-md border-sky-800 border-2 min-w-[280px] w-full min-h-[112px] text-sm scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
              placeholder="Faz uma breve descrição sobre você..."
            />

            <button
              type="submit"
              disabled={
                nomeAtual === nome ||
                descricaoAtual === descricao ||
                nomeDeUsuarioAtual === nomeDeUsuario
              }
              onClick={(event) => atualizarPerfil(event)}
              className="bg-orange-500 text-gray-800 rounded-md w-40 my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
            >
              Atualizar
            </button>
          </form>
          </div>
    )

}