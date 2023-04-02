import { useState, useEffect } from "react"
import { CabecalhoHome } from "../componentes/cabecalhoHome";
import {Browser, MapPinLine, WhatsappLogo} from "phosphor-react"
import { api } from "../lib/api";

interface FiliadoProps {
    id: string;
    imageURL: string;
    nome: string;
    cnpj: string;
    descricao: string;
    contato: string;
    pagina: string;
    posicaoX: number;
    posicaoY: number;
}

export function Parceiros() {
    const [filiados, setFiliados] = useState([]);

    useEffect(() => {
        api.get("parceiros")
        .then((res) => setFiliados(res.data));
    }, [])

    return (
        <>
        <CabecalhoHome />
        <div className="list-item justify-center w-screen min-h-[90vh] h-[90%] bg-[url('./assets/bg2.jpg')] bg-no-repeat bg-center bg-cover">
        {filiados.map((filiado: FiliadoProps) => {return (
        <div className="flex bg-gray-300 bottom-4 top-4 p-4 rounded-xl max-w-[788px]">
                <div className="w-36">
                    <img className="w-24 rounded-lg" src={filiado.imageURL} alt={filiado.nome} />
                    <h3>{filiado.nome}</h3>
                </div>
                <div className=" w-96">
                <div>
                    <span>{filiado.cnpj}</span>
                    <p>{filiado.descricao}</p>
                    <div className="flex justify-evenly">
                        <a href={"https://wa.me/+55" + filiado.contato}><WhatsappLogo size={32} color="#3ea829" weight="light"  /></a>
                        <a href={"https://www.google.com/maps/@" + filiado.posicaoX+","+filiado.posicaoY +",18z"}><MapPinLine size={32} color="#293ea8" weight="light" /></a>
                        <a href={filiado.pagina} target="_blank" ><Browser size={32} /></a>
                    </div>
                </div>
                </div>
        </div>
        )})
        
        }
        <h3>Sem mais parceiros...</h3>
        </div>
        </>
    )
}