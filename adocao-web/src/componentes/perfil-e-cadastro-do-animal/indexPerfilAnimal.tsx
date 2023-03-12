import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { CabecalhoHome } from "../../componentes/cabecalhoHome";
import { api } from "../../lib/api";
import { AtualizarPerfilAnimal } from './atulizarPefilAnimal';
import { MostrarPerfilAnimal } from './MostrarPerfilAnimal';


export function PerfilAnimal() {
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState("");
  const [personalidade, setPersonalidade] = useState("");
  const [necessidadesMedicas, setNecessidadesMedicas] = useState("");
  const [necessidadesComportamentais, setNecessidadesComportamentais] = useState("");
  const [atualizar, setAtualizar] = useState(false);

  useEffect(() => {
    api.get("/animal/perfil", {
        headers: {
          authorization: `Basic ${Cookies.get("token")}`
        }
      }).then((animal) => {
        setNome(animal.data.nome);
        setRaca(animal.data.raca);
        setIdade(animal.data.idade);
        setGenero(animal.data.genero);
        setPersonalidade(animal.data.personalidade);
        setNecessidadesMedicas(animal.data.necessidadesMedicas);
        setNecessidadesComportamentais(animal.data.necessidadesComportamentais);
      })
  }, []);

  return (
    <div>
      <CabecalhoHome />
      <div className="flex justify-center w-screen h-[90%] items-center bg-[url('./assets/bg2.jpg')] bg-no-repeat bg-center bg-cover">
        {!atualizar ? (
          <MostrarPerfilAnimal
            nome={nome}
            raca={raca}
            idade={idade}
            genero={genero}
            personalidade={personalidade}
            necessidadesMedicas={necessidadesMedicas}
            necessidadesComportamentais={necessidadesComportamentais}
            setAtualizar={setAtualizar}
          />
        ) : (
          <AtualizarPerfilAnimal
            nome={nome}
            raca={raca}
            idade={idade}
            genero={genero}
            personalidade={personalidade}
            necessidadesMedicas={necessidadesMedicas}
            necessidadesComportamentais={necessidadesComportamentais}
            setAtualizar={setAtualizar}
          />
        )}
      </div>
    </div>
  );
}
