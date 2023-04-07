import { CabecalhoHome } from "../../componentes/cabecalhoHome"

export function Forum() {

    const dd = {
		id: 1,
		imgURL: "https://fisioanimal.com/blog/wp-content/uploads/2019/06/shutterstock_474506101-752x470.jpg",
		titulo: "Preparação para receber cachorro filhote",
		autor: "FISIOANIMAL",
		criacao: "2023-04-01T16:23:01.589Z",
		texto: "Preparar a casa para receber o novo amigo irá facilitar a sua vida e dar mais conforto ao animal. Comece escolhendo um canto tranquilo para colocar a caminha de cachorro — é importante que seja uma local silencioso e sem muita movimentação, pois nos primeiros dias é normal que o cão fique inseguro. Além disso, no primeiro mês de vida o cão costuma dormir bastante e, para isso, precisa contar com um ambiente calmo. Além da cama, você deve providenciar bebedouro e comedouro para cachorro. Também é fundamental pensar na alimentação canina antes mesmo que ele chegue à sua casa. Tenha o cuidado de escolher o alimento ideal para a idade do animal.",
		categoria: "CUIDADO"
	}
    return(
        <div>
            <CabecalhoHome />
        <div className=" items-center bg-[url('./assets/bg.jpg')] bg-no-repeat bg-center bg-cover">
            <section key={dd.id} className="bg-slate-100/[0.6] p-10 rounded-xl mx-20 m-2.5">
            <h1 className="text-3xl font-semibold">{dd.titulo}</h1>
            <div className="flex ml-3">
                <h2 className="m-1 p-1 text-orange-600 font-bold">{dd.categoria}</h2>
                <h2 className="m-1 p-1 text-green-500 font-black">{dd.autor}</h2>
                <span className="m-1 p-1 font-bold">{dd.criacao}</span>
            </div>
            <img className="h-96 my-3" src={dd.imgURL} alt="simbolica"/>
            <p className="text-base">
                {dd.texto}
            </p>
            <button
            type="button"
            className="bg-orange-500 text-gray-800 rounded-md p-2 my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
            >
                Comentarios
            </button>
            </section>
        
        </div>
        </div>
    )
}