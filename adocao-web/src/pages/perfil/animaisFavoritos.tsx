import { useNavigate } from "react-router-dom"

interface AnimaisFavoritosProps {
    lista: {
        id: number
        nome: string
        imgURL: string
    } []
}

export function AnimaisFavoritos({lista}: AnimaisFavoritosProps ) {

    const navegate = useNavigate();

    return (
        <div className="">
            <h2 className="bg-slate-400">Animais Favoritos</h2>
            <div>
                {lista.map((animal) => { return (
                    <div key={animal.id} className="flex items-center">
                            <img src={animal.imgURL} alt="Foto do animal"  className="w-14 h-14 rounded-full m-2"/>
                        <button onClick={() => navegate("/animais/" + animal.id)}><span>{animal.nome}</span></button>
                    </div>
                )})}
            </div>
        </div>
    )
}