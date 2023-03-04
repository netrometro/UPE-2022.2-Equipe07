import "./CadastroNovoAnimal.css"


const CadastroNovoAnimal = () => {

    return (
        <>
            <form>
            <fieldset>
                <h3>Cadastro de novo pet</h3>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />
                <br/>
                <label htmlFor="raca">Raça:</label>
                <input type="text" id="raca" name="raca" required/>
                <br/>
                <label htmlFor="idade">Idade:</label>
                <input type="number" id="idade" name="idade" required/>
                <br/>
                <br/>
                <label htmlFor="personalidade">Personalidade:</label>
                <textarea id="personalidade" name="personalidade" ></textarea>
                <br/>
                <label htmlFor="condicoes-medicas">Condições médicas:</label>
                <textarea id="condicoes-medicas" name="condicoes-medicas"></textarea>
                <br/>
                <label htmlFor="comportamento">Comportamento:</label>
                <textarea id="comportamento" name="comportamento" ></textarea>
                <br/>
                <label htmlFor="foto">Foto:</label>
                <input type="file" id="foto" name="foto"/>
                <br/>
                <br/>
                <button type="submit">Cadastrar pet</button>
            </fieldset>
            </form>
        </>
    );
}

export default CadastroNovoAnimal;