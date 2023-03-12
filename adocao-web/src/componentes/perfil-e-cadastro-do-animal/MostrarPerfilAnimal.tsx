


interface AnimalProps {
  nome: string;
  raca: string;
  genero: string | null; 
  idade: string | null; 
  personalidade: string | null; 
  necessidadesMedicas: string | null; 
  necessidadesComportamentais: string | null;
  setAtualizar: (atualizar: boolean) => void;
}
export function MostrarPerfilAnimal({
  nome,
  raca,
  idade,
  genero,
  personalidade,
  necessidadesMedicas,
  necessidadesComportamentais,
  setAtualizar,
}: AnimalProps) {
  return (
    <>
      
        <fieldset className="FiledSet-envolve-tudo">
            <fieldset>
                <div className="Corpo do site">
                    <div className="dog-Perfil">
                        <div className="perfil-header">
                            <h2 className="dog-nome">Nome: {nome}</h2>
                            <h3 className="dog-raca">Raça: {raca}</h3>
                            <h3 className="dog-dono">Genero: {genero}</h3>
                        </div>
                        <div className="dog-perfil-info">
                            <div className="dog-perfil-idade">
                                <h3>Idade</h3>
                                <p>{idade} anos</p>
                            </div>
                            <div className="dog-personalidade">
                                <h3>Personalidade</h3>
                                <p>{personalidade}</p>
                            </div>
                            <div className="dog-condiçoes-medicas">
                                <h3>Necessidades Medicas</h3>
                                <p>{necessidadesMedicas}</p>
                            </div>
                            <div className="dog-comportamento">
                                <h3>Necessidades Comportamentais</h3>
                                <p>{necessidadesComportamentais}</p>
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
                        <button
                        type="button"
                        
                        className="bg-orange-500 text-gray-800 rounded-md w-40 my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium">Favoritar</button>
                        <button
                        type="button"
                        
                        className="bg-orange-500 text-gray-800 rounded-md w-40 my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium">Voltar</button>
                        <button
                        type="button"
                        onClick={() => setAtualizar(true)}
                        className="bg-orange-500 text-gray-800 rounded-md w-40 my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
                      >Atualizar</button>
                    </div>
                </div>
            </fieldset>
        </fieldset>
    </>
  );
}
