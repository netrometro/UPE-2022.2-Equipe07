import CatImage from "../assets/catastronaut.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

export function CabecalhoHome() {

    const [token, setToken] = useState(Cookies.get("token"));
    const navigate =  useNavigate();

    function logout() {
        Cookies.remove("token")
        setToken(undefined)
    }

    return (
        <div className="flex items-center h-[10vh]">
            <span className="w-70">
            <img src={CatImage} alt="cat_astronaut" className="w-12" />
            </span>
            <button
            className="m-10"
            onClick={() => {navigate("/")}}
            >Home</button>
            {token == null ?<button
            onClick={() => {navigate("/login")}}
            >Login</button> :
            <button
            className="m-10"
            onClick={() => {navigate("/usuario/perfil")}}
            >Meu Perfil</button>}
            <button
            className="m-10"
            onClick={() => {navigate("/cadastro")}}
            >Cadastro</button>
            <button
            className="m-10"
            onClick={() => {navigate("/forum")}}
            >Forum</button>
            <button
            className="m-10"
            onClick={() => {navigate("/parceiros")}}
            >Parceiros</button>
            <div>
            {token?
            <button
            className="m10 p-1 rounded-lg bg-red-600 hover:bg-red-700"
            type="button"
            onClick={() => logout()}
            >Logout</button>: ""}
            </div>
        </div>
    );
  }
  