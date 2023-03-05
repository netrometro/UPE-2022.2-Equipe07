import React from 'react';
import { Link } from 'react-router-dom';


const Show = () => {
    return (
        <>
        <div>
            <h1>Page Show!!!!</h1>
            <Link to={"/"}>
                <button>Voltar Feed</button>
            </Link>
        </div>
        </>
    );
};

export default Show;