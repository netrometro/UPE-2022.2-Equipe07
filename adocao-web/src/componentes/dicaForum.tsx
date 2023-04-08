import { useParams } from "react-router-dom";

interface DicaForum {
    dica: {
    id: number,
	imgURL: string;
	titulo: string;
	autor: string;
	criacao: string;
	texto: string;
	categoria: string;
    }
}

export function DicaForum({dica}: DicaForum) {

    

    return(
        <div>
            <h1 className="text-3xl font-semibold">{dica.titulo}</h1>
            <div className="flex ml-3">
                <h2 className="m-1 p-1 text-orange-600 font-bold">{dica.categoria}</h2>
                <h2 className="m-1 p-1 text-green-500 font-black">{dica.autor}</h2>
                <span className="m-1 p-1 font-bold">{dica.criacao}</span>
            </div>
            <img className="h-96 my-3" src={dica.imgURL} alt="simbolica"/>
            <p className="text-base">
                {dica.texto}
            </p>
        </div>
    )
}