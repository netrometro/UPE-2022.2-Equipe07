import { useNavigate } from "react-router-dom";
import CabecalhoHome from './CabecalhoHome';
import ConteudoHome from './ConteudoHome';


export function Home() {
    const navigator = useNavigate();

    /** 
    useEffect(() => {
        const token  = Cookies.get("token");
        if (!token) {
            navigator("/nsemTolkeNaHome");
        }
      })
    */

      return (
        <>
          <CabecalhoHome />
          <ConteudoHome />
        </>
      );
}