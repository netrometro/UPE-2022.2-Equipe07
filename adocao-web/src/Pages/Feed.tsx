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
        </div>
        </>
    );
};