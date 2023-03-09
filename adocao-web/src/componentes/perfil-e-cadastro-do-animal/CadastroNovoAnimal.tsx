import "./CadastroNovoAnimal.css"
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";
import CatImage from "../assets/catastronaut.svg";
import { validacaoEmail } from "../../lib/validacaoDeEmail";


const CadastroNovoAnimal = () => {
    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");
    const [idade, setIdade] = useState("");
    const [genero, setGenero] = useState("");
    const [personalidade, setPersonalidade] = useState("");
    const [necessidadesMedicas, setNecessidadesMedicas] = useState("");
    const [necessidadesComportamentais, setNecessidadesComportamentais] = useState("");
    const [comunicacao, setComunicacao] = useState(false);
    const navigate = useNavigate();
    
    //esse de fotos temq ue arrumar depois
    //const [listaDeFotos, setListaDeFotos] = useState([]);
    
    async function cadastrarAnimal(event: FormEvent) {
        event.preventDefault();

        setComunicacao(true);

        await api
        .post("/animal/cadastro", {
            nome: nome,
            raca: raca,
            idade: idade,
            genero: genero,
            personalidade: personalidade,
            necessidadesMedicas: necessidadesMedicas,
            necessidadesComportamentais: necessidadesComportamentais
        })
        .then(() => navigate("/animal/cadastro/concluido"))
        .catch((err) => console.log(err));

        setComunicacao(false);
    }


    return (
        <>
            <form className="grid col-auto">
            
                <h3>Cadastro de novo pet</h3>
                <span className="text-sky-800">Nome: </span>
                <input
                type="text"
                onChange={(event) => setNome(event.target.value)}
                className="rounded-md border-sky-800 border-2"
                />
                <br/>

                <span className="text-sky-800">Raca: </span>
                <input
                type="text"
                onChange={(event) => setRaca(event.target.value)}
                className="rounded-md border-sky-800 border-2"
                />
                <br/>
                
                <span className="text-sky-800">Idade: </span>
                <input
                type="text"
                onChange={(event) => setIdade(event.target.value)}
                className="rounded-md border-sky-800 border-2"
                />
                <br/>

                <span className="text-sky-800">Genero: </span>
                <input
                type="text"
                onChange={(event) => setGenero(event.target.value)}
                className="rounded-md border-sky-800 border-2"
                />
                <br/>

                <span className="text-sky-800">Personalidade: </span>
                <input
                type="text"
                onChange={(event) => setPersonalidade(event.target.value)}
                className="rounded-md border-sky-800 border-2"
                />
                <br/>

                <span className="text-sky-800">Necessidades Medicas: </span>
                <input
                type="text"
                onChange={(event) => setNecessidadesMedicas(event.target.value)}
                className="rounded-md border-sky-800 border-2"
                />
                <br/>

                <span className="text-sky-800">Necessidades Comportamentais: </span>
                <input
                type="text"
                onChange={(event) => setNecessidadesComportamentais(event.target.value)}
                className="rounded-md border-sky-800 border-2"
                />
                <br/>

                <label htmlFor="foto">Foto:</label>
                <input type="file" id="foto" name="foto" />
                <br/>
                <br/>
                
                <button type="submit">Cadastrar pet</button>
            
            </form>
        </>
    );
}

export default CadastroNovoAnimal;