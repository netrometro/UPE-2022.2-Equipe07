import { useEffect, useState } from "react";
import { CabecalhoHome } from "../../componentes/cabecalhoHome";
import { api } from "../../lib/api";
import { AtualizarPerfil } from "./atulizarPefil";
import { MostrarUsuario } from "./MostrarUsuario";

export function Perfil() {

    useEffect(() => {
        api.get("")
    })
    const [atualizar, setAtualizar] = useState(false);

    return (
        <div>
            <CabecalhoHome />
            <div className="flex justify-center w-screen h-[90%] items-center bg-[url('./assets/bg2.jpg')] bg-no-repeat bg-center bg-cover">
            {!atualizar? <MostrarUsuario nome="Amadeu Santos" nomeDeUsuario="Dresh" criacao={new Date()} descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, autem dolorem ut aliquam rem pariatur, eaque tenetur, labore laudantium maxime molestiae. Eligendi nemo dignissimos, aliquid aut provident doloribus facilis vitae." setAtualizar={setAtualizar}/>:
            <AtualizarPerfil nome="Amadeu Santos" nomeDeUsuario="Dresh" descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, autem dolorem ut aliquam rem pariatur, eaque tenetur, labore laudantium maxime molestiae. Eligendi nemo dignissimos, aliquid aut provident doloribus facilis vitae." />}
            </div>
        </div>
    )
}