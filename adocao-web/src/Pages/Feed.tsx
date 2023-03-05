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
        </div>
        </>
    );
};