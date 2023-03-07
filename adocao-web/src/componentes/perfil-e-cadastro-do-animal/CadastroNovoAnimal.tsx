import "./CadastroNovoAnimal.css"

const CadastroNovoAnimal = () => {

    return (
        <>
            <form onSubmit={ () => {} }>
            <fieldset>
                <h3>Cadastro de novo pet</h3>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" required />
                <br/>
                <label htmlFor="raca">Raça:</label>
                <input type="text" id="raca"  required/>
                <br/>
                <br/>
                <label htmlFor="idade">Idade:</label>
                <input type="number" id="idade" />
                <br/>
                <br/>
                <label htmlFor="genero">Genero:</label>
                <input type="text" id="genero" required/>
                <br/>
                <label htmlFor="personalidade">Personalidade:</label>
                <textarea id="personalidade" ></textarea>
                <br/>
                <label htmlFor="necessidadesMedicas">Condições médicas:</label>
                <textarea id="necessidadesMedicas" ></textarea>
                <br/>
                <label htmlFor="necessidadesComportamentais">Comportamento:</label>
                <textarea id="necessidadesComportamentais"  ></textarea>
                <br/>
                <label htmlFor="foto">Foto:</label>
                <input type="file" id="foto" name="foto" />
                <br/>
                <br/>
                <button type="submit">Cadastrar pet</button>
            </fieldset>
            </form>
        </>
    );
}

export default CadastroNovoAnimal;