import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Post() {

    const { register , handleSubmit, formState:{errors} } = useForm();

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