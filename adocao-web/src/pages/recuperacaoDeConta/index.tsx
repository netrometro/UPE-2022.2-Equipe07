import { useState } from "react";
import { InsercaoDeCodigo } from "./insercaoDeCodigo";
import dogLost from "../../assets/dogLost.png";
import { InsercaoDeEmail } from "./insercaoDeEmail";
import { CabecalhoHome } from "../../componentes/cabecalhoHome";

export function RecuperacaoDeConta() {
  const [enviada, setEnvio] = useState(false);

  return (
    <>
    <CabecalhoHome />
    <div className="flex justify-center h-[90%] items-center bg-[url('./assets/bg2.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-gray-200 p-6 flex items-center justify-center row w-5/6 rounded-xl shadow-lg h-5/6">
        <span className="w-70">
          <img src={dogLost} alt="cat_astronaut" className="w-96" />
        </span>
        <div className="m-10">
        <h1 className="text-sky-900 font-sans font-medium text-4xl">Esqueci a senha</h1>
        {!enviada ? (
          <InsercaoDeEmail setEnvio={setEnvio} />
        ) : (
          <InsercaoDeCodigo />
        )}
        </div>
      </div>
    </div>
    </>
  );
}
