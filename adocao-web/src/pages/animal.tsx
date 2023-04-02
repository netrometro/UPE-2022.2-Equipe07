import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import {
  Params,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { log } from "console";
import { CabecalhoHome } from "../componentes/cabecalhoHome";

interface AnimalProps {
  id: string;
}

interface Animais {
  id: number;
  nome: string;
  imgURL: string;
}

export function Animal() {
  let params = useParams();
  const id = Number.parseInt(params.id!);
  const [nome, setNome] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [fav, setFav] = useState(false);
  const navegator = useNavigate();

  async function favoritasAnimal(
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    id: number
  ) {
    if (event.currentTarget.checked) {
      api
        .put(
          "perfil/animal/" + id,
          {},
          {
            headers: {
              authorization: `Basic ${Cookies.get("token")}`,
            },
          }
        )
        .catch((err) => console.log(err));
    } else {
      api
        .delete("perfil/animal/" + id, {
          headers: {
            authorization: `Basic ${Cookies.get("token")}`,
          },
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    api
      .get("animais/" + params.id)
      .then((res) => {
        setNome(res.data.nome);
        setImgURL(res.data.imgURL);
      })
      .catch((err) => console.log(err));

    if (Cookies.get("token")) {
      api
        .put(
          "perfil/animal/" + id,
          {},
          {
            headers: {
              authorization: `Basic ${Cookies.get("token")}`,
            },
          }
        )
        .catch((err) => setFav(true));
    }
  }, []);

  return (
    <div>
      <CabecalhoHome />
      {nome !== "" ? (
        <div>
          <img src={imgURL} alt={nome} />
          <h1>{nome}</h1>
          <div>
            {Cookies.get("token") ? (
              <div>
                {fav ? (
                  <input
                    className="m-5"
                    type="checkbox"
                    onClick={(event) => favoritasAnimal(event, id)}
                    defaultChecked
                  />
                ) : (
                  <input
                    className="m-5"
                    type="checkbox"
                    onClick={(event) => favoritasAnimal(event, id)}
                  />
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <h1>Animal não encontrado!</h1>
      )}
    </div>
  );
}
