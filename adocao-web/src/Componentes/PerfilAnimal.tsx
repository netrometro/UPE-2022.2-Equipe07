import './PerfilAnimal.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function PerfilAnimal({ id }: { id: any }) {
    const [cachorro, setCachorro] = useState<any>(null);

    async function getCachorro(id: any) {
        try {
            const response = await axios.get(`http://localhost:3000/perfilanimal/${id}`);
            setCachorro(response.data);
        } catch (error) {
            console.log("erro na hora de puxar os dados do DB");
        }
    }

    useEffect(
        () => {
        getCachorro(id);
        }, 
        [id]
    );

    if (!cachorro) {
        return <p>Carregando...</p>;
    } else {
        return (
            <>
                <fieldset className="FiledSet-envolve-tudo">
                    <fieldset>
                        <div className="Corpo do site">
                            <div className="dog-Perfil">
                                <div className="perfil-header">
                                    <h2 className="dog-nome">Nome: {cachorro?.nome}</h2>
                                    <h3 className="dog-raca">Raça: {cachorro?.raca}</h3>
                                    <h3 className="dog-dono">Dono: {cachorro?.id_dono}</h3>
                                </div>
                                <div className="dog-perfil-info">
                                    <div className="dog-perfil-idade">
                                        <h3>Idade</h3>
                                        <p>{cachorro?.idade} anos</p>
                                    </div>
                                    <div className="dog-personalidade">
                                        <h3>Personalidade</h3>
                                        <p>{cachorro?.personalidade}</p>
                                    </div>
                                    <div className="dog-condiçoes-medicas">
                                        <h3>Necessidades Medicas</h3>
                                        <p>{cachorro?.necessidadesMedicas || 'Nenhuma'}</p>
                                    </div>
                                    <div className="dog-comportamento">
                                        <h3>Necessidades Comportamentais</h3>
                                        <p>{cachorro?.necessidadesComportamentais}</p>
                                    </div>
                                </div>
                                <div className="dog-fotos">
                                    <h3>Fotos</h3>
                                    <div className="dog-fotos-container">
                                        {cachorro.fotos.map((foto: string, index: number) => (
                                            <img key={index} src={foto} alt={`Imagem ${index + 1}`} />
                                        ))}
                                    </div>
                                </div>
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
}
export default PerfilAnimal;