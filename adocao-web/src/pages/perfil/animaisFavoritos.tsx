import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface AnimaisFavoritosProps {
  animal: { id: number; imgURL: string; nome: string };
}

export function AnimaisFavoritos() {
  const [animaisFav, setAnimaisFav] = useState([]);
  const [token, setToken] = useState(Cookies.get("token"));
  const navegate = useNavigate();

  useEffect(() => {
    api
      .get("perfil/animais", {
        headers: {
          authorization: `Basic ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        setAnimaisFav(res.data);
      });
  }, []);

  async function favoritasAnimal(
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    id: number
  ) {
    if (event.currentTarget.checked) {
      api
        .put("perfil/animal/" + id, {}, {
            headers: {
                authorization: `Basic ${token}`,
          },
        })
        .catch((err) => console.log(err));
    } else {
      api
        .delete("perfil/animal/" + id, {
          headers: {
            authorization: `Basic ${token}`,
          },
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="">
      <h2 className="bg-slate-400">Animais Favoritos</h2>
      <div>
        {animaisFav.map(({ animal }: AnimaisFavoritosProps) => {
          return (
            <div key={animal.id} className="flex items-center">
              <img
                src={animal.imgURL}
                alt="Foto do animal"
                className="w-14 h-14 rounded-full m-2"
              />
              <button onClick={() => navegate("animais/" + animal.id)}>
                <span>{animal.nome}</span>
              </button>
              <input
                className="m-5"
                type="checkbox"
                onClick={(event) => favoritasAnimal(event, animal.id)}
                defaultChecked
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
