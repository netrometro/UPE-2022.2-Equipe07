import React from 'react';
import { Link } from 'react-router-dom';


export default function Post() {
    return (
        <>
        <div>
            <h1>Page de Post</h1>

            <Link to={"/"}>
                <button>Voltar Feed</button>
            </Link>
        </div>
        </>
    );
};