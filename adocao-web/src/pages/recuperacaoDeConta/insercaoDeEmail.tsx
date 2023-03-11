import { FormEvent, useState } from "react";
import { api } from "../../lib/api";
import { validacaoEmail } from "../../lib/validacaoDeEmail";

interface InsercaoDeEmailProps {
  setEnvio: (envio: boolean) => void;
}

export function InsercaoDeEmail({ setEnvio }: InsercaoDeEmailProps) {
  const [email, setEmail] = useState("");
  const [comunicao, setComunicao] = useState(false);

  async function recuperacao(event: FormEvent) {
    event.preventDefault();

    setComunicao(true);
    
    setEnvio(true);

    await api
      .post("recuperacao", {
        email
      })
      .catch((err) => console.log(err));

      setComunicao(false);

  }

  return (
    <form className="grid col-auto" onSubmit={(event) => recuperacao(event)}>
      <span className="text-sky-800">Email</span>
      <input
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        className="rounded-md border-sky-800 border-2"
      />

      <span className="text-sky-900 text-sm">
        Um código será enviado para seu email
      </span>

      <button
        type="submit"
        disabled={!validacaoEmail.test(email) || comunicao}
        className="bg-orange-500 text-gray-800 rounded-md min-w-full my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
      >
        Enviar
      </button>
    </form>
  );
}
