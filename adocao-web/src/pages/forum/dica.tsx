import { useParams } from "react-router-dom";
import { CabecalhoHome } from "../../componentes/cabecalhoHome";
import { DicaForum } from "../../componentes/dicaForum";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";

 
interface Comentarios {
    id: number;
    texto: string;
    usuario: {
        nomeDeUsuario: string;
    }
}

export function Dica() {
  const params = useParams();
  const id = Number.parseInt(params.id!);
  const [iid, setId] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [autor, setAutor] = useState("");
  const [criacao, setCriacao] = useState("");
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [comentarios, setComentarios] = useState([]);


  useEffect(() => {
    api.get("/dica/" + params.id).then((res) => {

        setId(res.data.id)
        setTitulo(res.data.titulo)
        setImgURL(res.data.imgURL)
        setAutor(res.data.autor)
        setCriacao(res.data.criacao)
        setTexto(res.data.texto)
        setCategoria(res.data.categoria)
    });

    api.get("/comentarios/dicas/" + id).then((res) => setComentarios(res.data));
  }, []);

  return (
    <div>
      <CabecalhoHome />
      <div className=" items-center bg-[url('./assets/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <section className="bg-slate-100/[0.6] p-10 rounded-xl mx-20 m-2.5">
          <DicaForum dica={{id, titulo, imgURL, autor, criacao, texto, categoria}} />
          <div className="bg-slate-100/[0.6] p-5 rounded-xl mx-20 m-2.5">
            {comentarios.map((com: Comentarios) => {
                return (
            <section className="my-2" key={com.id}>
              <h3 className="font-extrabold">{com.usuario.nomeDeUsuario}</h3>
              <p>{com.texto}</p>
            </section>
                )
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
