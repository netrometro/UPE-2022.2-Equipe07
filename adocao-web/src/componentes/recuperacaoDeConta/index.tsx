import { useState } from "react";
import { InsercaoDeCodigo } from "./insercaoDeCodigo";
import { InsercaoDeEmail } from "./insercaoDeEmail";

export function RecuperacaoDeConta() {
    const [enviada, setEnvio] = useState(false);

    return (
        <div>
            <div>
            <h1>Esqueci a senha</h1>
            {!enviada? <InsercaoDeEmail setEnvio={setEnvio} />: <InsercaoDeCodigo />}
            </div>
        </div>
    );
}