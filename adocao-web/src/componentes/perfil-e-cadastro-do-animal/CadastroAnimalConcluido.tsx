import { useNavigate } from "react-router-dom";
import { CabecalhoHome } from '../cabecalhoHome';


export function CadastroAnimalConcluido() {
    
    const navigate = useNavigate();

    return (
        <>
            <CabecalhoHome />
            <p>Cadastro do novo animal concluido</p>
            <br></br>
            <br></br>
            <button
            type="button"
            onClick={() => navigate("/")}
            >Voltar prara a HOME</button>
        </>
    );
}
