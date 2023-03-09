import { useNavigate } from "react-router-dom";


export function CadastroAnimalConcluido() {
    
    const navigate = useNavigate();

    return (
        <>
            <p>Cadastro do novo animal concluido</p>
            <br></br>
            <br></br>
            <button
            type="button"
            onClick={() => navigate("/home")}
            >Voltar prara a HOME</button>
        </>
    );
}
