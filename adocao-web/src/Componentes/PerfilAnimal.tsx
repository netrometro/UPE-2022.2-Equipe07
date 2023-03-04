import './PerfilAnimal.css'


const PerfilAnimal = () =>{
    return(
        <>
        <fieldset className="Filed-set-01">
            <fieldset>
                <div className="Cabecalho do site">
                    <p>Adocao Logo</p>
                </div>
            </fieldset>
            <fieldset>
                <div className="Corpo do site">
                <div className="dog-Perfil">
                    <div className="perfil-header">
                        <h2 className="dog-nome">Nome: thor</h2>
                        <h3 className="dog-raca">Raça: pincher</h3>
                        <h3 className="dog-dono">Dono: antonio</h3>
                    </div>
                    <div className="dog-perfil-info">
                        <div className="dog-perfil-idade">
                            <h3>Idade</h3>
                            <p>4 anos</p>
                        </div>
                        <div className="dog-personalidade">
                            <h3>Personalidade</h3>
                            <p>Amigavel</p>
                        </div>
                        <div className="dog-condiçoes-medicas">
                            <h3>Necessidades Medicas</h3>
                            <p>null</p>
                        </div>
                        <div className="dog-comportamento">
                            <h3>Necessidades Comportamentais</h3>
                            <p>Precisa brincar bastante</p>
                        </div>
                    </div>
                    <div className="dog-fotos">
                        <h3>Fotos</h3>
                            <div className="dog-fotos-container">
                                <img src="" alt="imagem 1" />
                                <img src="" alt="imagem 2" />
                                <img src="" alt="imagem 3" />
                                <img src="" alt="imagem 4" />
                                <img src="" alt="imagem 5" />
                            </div>
                    </div>
                    </div>
                    <br/>
                    <div className="botoes">
                        <button type="button" name="Favotirar" className="Favoritar">Favoritar</button>
                        <button type="button" name="voltar" className="Favoritar">Voltar</button>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="Roda pe do site">
                    <p>Roda pe do site</p>
                </div>
            </fieldset>
        </fieldset>
        </>
    );
}

export default PerfilAnimal;