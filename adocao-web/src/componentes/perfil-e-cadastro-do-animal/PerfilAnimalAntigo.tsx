import { CabecalhoHome } from '../cabecalhoHome';

function PerfilAnimalAntigo() {
  
    return (
            <>
                <CabecalhoHome />
                <fieldset className="FiledSet-envolve-tudo">
                    <fieldset>
                        <div className="Corpo do site">
                            <div className="dog-Perfil">
                                <div className="perfil-header">
                                    <h2 className="dog-nome">Nome: {}</h2>
                                    <h3 className="dog-raca">Raça: {}</h3>
                                    <h3 className="dog-dono">Dono: {}</h3>
                                </div>
                                <div className="dog-perfil-info">
                                    <div className="dog-perfil-idade">
                                        <h3>Idade</h3>
                                        <p>{} anos</p>
                                    </div>
                                    <div className="dog-personalidade">
                                        <h3>Personalidade</h3>
                                        <p>{}</p>
                                    </div>
                                    <div className="dog-condiçoes-medicas">
                                        <h3>Necessidades Medicas</h3>
                                        <p>{}</p>
                                    </div>
                                    <div className="dog-comportamento">
                                        <h3>Necessidades Comportamentais</h3>
                                        <p>{}</p>
                                    </div>
                                </div>
                                {/*
                                <div className="dog-fotos">
                                    <h3>Fotos</h3>
                                    <div className="dog-fotos-container">
                                        {cachorro.fotos.map((foto: string, index: number) => (
                                            <img key={index} src={foto} alt={`Imagem ${index + 1}`} />
                                        ))}
                                    </div>
                                </div>
                                 */}
                            </div>
                            <br />
                            <div className="botoes">
                                <button type="button" name="Favotirar" className="Favoritar">Favoritar</button>
                                <button type="button" name="voltar" className="Favoritar">Voltar</button>
                            </div>
                        </div>
                    </fieldset>
                </fieldset>
            </>
    );
}
