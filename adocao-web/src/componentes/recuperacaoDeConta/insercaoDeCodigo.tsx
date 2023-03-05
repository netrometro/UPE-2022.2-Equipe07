import { useState } from "react";

export function InsercaoDeCodigo() {
    const [codigo, setCodigo] = useState("");

  return (
    // function forar
    <form onSubmit={() => console.log("enviado")}>

      <span>Código</span>
      <input type="text" onChange={(event) => setCodigo(event.target.value)} />

      <button type="submit" disabled={codigo.length < 5}>
        Login
      </button>

    </form>
  );
}
