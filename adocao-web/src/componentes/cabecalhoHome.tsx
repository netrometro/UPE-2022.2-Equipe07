import CatImage from "../assets/catastronaut.svg";
import { useNavigate } from "react-router-dom";

export function CabecalhoHome() {

    const navigate =  useNavigate();

    return (
        <div className="flex items-center h-[10vh]">
            <span className="w-70">
            <img src={CatImage} alt="cat_astronaut" className="w-12" />
            </span>
            <button
            className="m-10"
            onClick={() => {navigate("/")}}
            >Home</button>
            <button
            onClick={() => {navigate("/login")}}
            >Login</button>
            <button
            className="m-10"
            onClick={() => {navigate("/cadastro")}}
            >Cadastro</button>
            <button
            className="m-10"
            onClick={() => {navigate("/usuario/perfil")}}
            >Meu Perfil</button>
            <button
            className="m-10"
            onClick={() => {navigate("/parceiros")}}
            >Parceiros</button>
        </div>
    );
  }
  