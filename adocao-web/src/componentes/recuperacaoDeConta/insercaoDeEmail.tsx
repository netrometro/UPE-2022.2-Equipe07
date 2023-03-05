import { useState } from "react";
import { validacaoEmail } from "../../lib/validacaoDeEmail";

interface InsercaoDeEmailProps {
  setEnvio : (envio: boolean) => void;
}

export function InsercaoDeEmail({ setEnvio }: InsercaoDeEmailProps) {
    const [email, setEmail] = useState("");
    
    return (
      // function forar
        <form onSubmit={(event) => {event.preventDefault(); setEnvio(true)}}>
          
            <span>Email</span>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <span>Um código será enviado para seu email</span>

          <button
          type="submit"
          disabled={!validacaoEmail.test(email)}
          >Login</button>
        </form>
    );
}