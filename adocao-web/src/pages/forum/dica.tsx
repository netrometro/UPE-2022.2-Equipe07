import { useParams } from "react-router-dom";
import { CabecalhoHome } from "../../componentes/cabecalhoHome";
import { DicaForum } from "../../componentes/dicaForum";

interface DicaProps {
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

    const dica = {
		id: 1,
		imgURL: "https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg",
		titulo: "Preparação para receber cachorro filhote",
		autor: "FISIOANIMAL",
		criacao: "2023-04-01T16:23:01.589Z",
		texto: "Preparar a casa para receber o novo amigo irá facilitar a sua vida e dar mais conforto ao animal. Comece escolhendo um canto tranquilo para colocar a caminha de cachorro — é importante que seja uma local silencioso e sem muita movimentação, pois nos primeiros dias é normal que o cão fique inseguro. Além disso, no primeiro mês de vida o cão costuma dormir bastante e, para isso, precisa contar com um ambiente calmo. Além da cama, você deve providenciar bebedouro e comedouro para cachorro. Também é fundamental pensar na alimentação canina antes mesmo que ele chegue à sua casa. Tenha o cuidado de escolher o alimento ideal para a idade do animal.",
		categoria: "CUIDADO"
	}

export function Dica() {
    const params = useParams();
    const id = Number.parseInt(params.id!);
    return(
        <div>
            <CabecalhoHome />
        <div className=" items-center bg-[url('./assets/bg.jpg')] bg-no-repeat bg-center bg-cover">
            <section className="bg-slate-100/[0.6] p-10 rounded-xl mx-20 m-2.5">
            <DicaForum dica={dica} />
            <div className="bg-slate-100/[0.6] p-5 rounded-xl mx-20 m-2.5">
                <section className="my-2">
                    <h3 className="font-extrabold">docas</h3>
                    <p>mpedit!</p>
                </section>
            </div>
            </section>
        </div>
        </div>
    )
}