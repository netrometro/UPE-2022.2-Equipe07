import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { CabecalhoHome } from "../../componentes/cabecalhoHome"
import { DicaForum } from "../../componentes/dicaForum"
import { api } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";

type Dica = {
    id: number;
	imgURL: string;
	titulo: string;
	autor: string;
	criacao: string;
	texto: string;
	categoria: string;
    }

export function Forum() {

    const [dicas, setDicas] = useState([]);
    const navegator = useNavigate();

    useEffect(() => {

      api.get("/dicas").then((res) => setDicas(res.data));
    }, []);

    async function filtrar(event: ChangeEvent<HTMLSelectElement>) {
        const filtro = event.target.value;
        api.get("/dicas/"+filtro).then((res) => setDicas(res.data));
    }

    return(
        <div>
            <CabecalhoHome />
        <div className=" items-center min-h-screen bg-[url('./assets/bg.jpg')] bg-no-repeat bg-center bg-cover">
            <select className="ml-20 border rounded-xl p-1 mt-3" itemID="12" name="filtro" id="1" onChange={(event)=> filtrar(event)}>
                <option value="">Todos</option>
                <option value="CUIDADO">CUIDADO</option>
                <option value="NUTRICAO">NUTRICAO</option>
                <option value="TREINAMENTO">TREINAMENTO</option>
                <option value="EXERCICIO">EXERCICIO</option>
            </select>
            {dicas.map((dica: Dica) => {
                return (
                    <section key={dica.id} className="bg-slate-100/[0.6] p-10 rounded-xl mx-20 m-2.5">
                    <DicaForum dica={dica} />
                    <button
                    type="button"
                    className="bg-orange-500 text-gray-800 rounded-md p-2 my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
                    onClick={(event) => navegator("/forum/"+dica.id)}
                    >
                        Comentarios
                    </button>
                    </section>
                )
            })}
           
        
        </div>
        </div>
    )
}