import Cookies from "js-cookie";
import { FormEvent, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";

export function InsercaoDeCodigo() {
    const [codigo, setCodigo] = useState("");
    const [, setComunicao] = useState(false);
    const navigate = useNavigate();

    async function conectar(event: FormEvent) {
      event.preventDefault();

      setComunicao(true);

      
      Cookies.set("token", codigo);
        
      
      setComunicao(false);
      navigate("/seguranca");
    }

  return (
    // function forar
    <form className="grid col-auto" onSubmit={(event) => conectar(event)}>

      <span className="text-sky-800">Código</span>
      <input
      type="text"
      onChange={(event: { target: { value: SetStateAction<string>; }; }) => setCodigo(event.target.value)}
      className="rounded-md border-sky-800 border-2"
      />

      <button
      type="submit"
      disabled={codigo.length < 5}
      className="bg-orange-500 text-gray-800 rounded-md min-w-full my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
      >
        Login
      </button>

    </form>
  );
}
