import React from 'react';
import { Link } from 'react-router-dom';


export default function Feed() {
    return (
        <>
        <div>
            <h1>Page de Feed</h1>

            <Link to={"/post"}>
                <button>Ir para POST</button>
            </Link>
            <br/>
            <br/>
            <Link to={"/edit"}>
                <button>Ir para EDIT</button>
            </Link>
            <br/>
            <br/>
            <Link to={"/show"}>
                <button>Ir para SHOW</button>
            </Link>
            <br/>
            <br/>
            <Link to={"/animal/new"}>
                <button>Ir para Cadastro</button>
            </Link>
            <br/>
            <br/>
            <Link to={"/perfilAnimal"}>
                <button>Ir para Perfil animal</button>
            </Link>
            <br/>
            <br/>
        </div>
        </>
    );
};