import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {CabecalhoHome} from "../componentes/cabecalhoHome";

export function Home() {
    // const navigator = useNavigate();

    // useEffect(() => {
    //     const token  = Cookies.get("token");
    //     if (!token) {
    //         navigator("/");
    //     }
    //   })

      return (
        <div>
          <CabecalhoHome />
            Hello World!
        </div>
      );
}