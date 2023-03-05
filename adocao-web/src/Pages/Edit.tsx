import React from 'react';
import { Link } from 'react-router-dom';


const Edit = () => {
    return (
        <>
        <div>
            <h1>Page edit!!!!</h1>
            <Link to={"/"}>
                <button>Voltar Feed</button>
            </Link>
        </div>
        </>
    );
};

export default Edit;