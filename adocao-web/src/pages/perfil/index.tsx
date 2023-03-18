import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CabecalhoHome } from "../../componentes/cabecalhoHome";
import { api } from "../../lib/api";
import { AtualizarPerfil } from "./atulizarPefil";
import { MostrarUsuario } from "./MostrarUsuario";

export function Perfil() {
  const [nome, setNome] = useState("Sem usuario");
  const [nomeDeUsuario, setNomeDeUsuario] = useState("Sem usuario");
  const [descricao, setDescricao] = useState("Sem usuario");
  const [criacao, setCriacao] = useState(new Date());
  const [atualizar, setAtualizar] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {

      const token  = Cookies.get("token");
      if (!token) {
          navigator("/");
      }

    api.get("perfil", {
        headers: {
          authorization: `Basic ${Cookies.get("token")}`
        }
      }).then((usuario) => {
        setNome(usuario.data.nome);
        setNomeDeUsuario(usuario.data.nomeDeUsuario);
        setDescricao(usuario.data.descricao);
        setCriacao(new Date(usuario.data.criacao));
      })
  }, []);



  return (
    <div>
      <CabecalhoHome />
      <div className="flex justify-center w-screen h-[90%] items-center bg-[url('./assets/bg2.jpg')] bg-no-repeat bg-center bg-cover">
        {!atualizar ? (
          <MostrarUsuario
            nome={nome}
            nomeDeUsuario={nomeDeUsuario}
            criacao={criacao}
            descricao={descricao}
            setAtualizar={setAtualizar}
          />
        ) : (
          <AtualizarPerfil
            nome={nome}
            nomeDeUsuario={nomeDeUsuario}
            descricao={descricao}
          />
        )}
      </div>
    </div>
  );
}
