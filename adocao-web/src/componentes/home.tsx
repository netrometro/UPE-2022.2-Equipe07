import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigator = useNavigate();

    useEffect(() => {
        const token  = Cookies.get("token");
        if (!token) {
            navigator("/");
        }
      })

      return (
        <div>
            Hello World!
        </div>
      );
}