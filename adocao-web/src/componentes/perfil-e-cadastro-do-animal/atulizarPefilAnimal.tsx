import Cookies from "js-cookie";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";

interface AnimalProps {
  nome: string;
  raca: string;
  genero: string; 
  idade: string; 
  personalidade: string ; 
  necessidadesMedicas: string ; 
  necessidadesComportamentais: string ;
  setAtualizar: (atualizar: boolean) => void;
}
export function AtualizarPerfilAnimal({nome,raca,idade,genero,personalidade,necessidadesMedicas,necessidadesComportamentais }: AnimalProps) {
  const [nomeAtual, setNome] = useState(nome);
  const [racaAtual, setRaca] = useState(raca);
  const [idadeAtual, setIdade] = useState(idade);
  const [generoAtual, setGenero] = useState(genero);
  const [personalidadeAtual, setPersonalidade] = useState(personalidade);
  const [necessidadesMedicasAtual, setNecessidadesMedicas] = useState(necessidadesMedicas);
  const [necessidadesComportamentaisAtual, setNecessidadesComportamentais] = useState(necessidadesComportamentais);
    const [comunicao, setComunicao] = useState(false);
    const navigate = useNavigate();

    async function atualizarPerfil(event: FormEvent) {
        event.preventDefault()
        setComunicao(true);
        await api.put("perfil", {nome:nomeAtual,raca:racaAtual,idade:idadeAtual,genero:generoAtual,personalidade:personalidadeAtual,necessidadesMedicas:necessidadesMedicasAtual,necessidadesComportamentais:necessidadesComportamentaisAtual }, {
          headers: {
            authorization: `Basic ${Cookies.get("token")}`
          }
        }).then(() => console.log("ok"))
        .catch((err)=> console.log(err));
        setComunicao(false);
        navigate("/")
    }

    return (
        <div className="bg-gray-200 p-6 flex items-center justify-center row w-5/6 rounded-xl shadow-lg h-5/6">
        <form className="grid col-auto" onSubmit={(event) => atualizarPerfil(event)}>
            <span className="text-sky-800">Nome</span>
            <input
            value={nomeAtual}
              type="text"
              onChange={(event) => setNome(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />
            <span className="text-sky-800">Raca</span>
            <input
            value={racaAtual}
              type="text"
              onChange={(event) => setRaca(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />
            <span className="text-sky-800">idade</span>
            <input
              value={idadeAtual}
              type="text"
              onChange={(event) => setIdade(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />
            <span className="text-sky-800">genero</span>
            <input
            value={generoAtual}
              type="text"
              onChange={(event) => setGenero(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />
            <span className="text-sky-800">personalidade</span>
            <input
            value={personalidadeAtual}
              type="text"
              onChange={(event) => setPersonalidade(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />
            <span className="text-sky-800">necessidadesMedicas</span>
            <input
            value={necessidadesMedicasAtual}
              type="text"
              onChange={(event) => setNecessidadesMedicas(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />
            <span className="text-sky-800">necessidadesComportamentais</span>
            <input
            value={necessidadesComportamentaisAtual}
              type="text"
              onChange={(event) => setNecessidadesComportamentais(event.target.value)}
              className="rounded-md border-sky-800 border-2"
            />
            
            <button
              type="submit"
              className="bg-orange-500 text-gray-800 rounded-md w-40 my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
            >
              Atualizar
            </button>
          </form>
          </div>
    )

}