interface UsuarioProps {
  nome: string;
  nomeDeUsuario: string;
  descricao: string | null;
  criacao: Date;
  setAtualizar: (atualizar: boolean) => void;
}
export function MostrarUsuario({
  nome,
  nomeDeUsuario,
  descricao,
  criacao,
  setAtualizar,
}: UsuarioProps) {
  return (
    <div className="flex justify-center h-[90vh] items-center bg-[url('./assets/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-gray-200 p-6 w-5/6 rounded-xl shadow-lg h-5/6 ">
        <h1 className="text-5xl text-sky-900 flex justify-between">
          Nome: {nome}
        </h1>
        <span className="text-xs text-sky-700 flex justify-between">
          desde {criacao.getDate()}/{criacao.getMonth() + 1}/
          {criacao.getFullYear()}
        </span>
        <span className="text-xl text-sky-900 flex justify-between">
          Nome de Usuario: {nomeDeUsuario}
        </span>
        <span className="text-sm text-sky-900 flex justify-between ">
          {descricao}
        </span>

          <button
            type="button"
            onClick={() => setAtualizar(true)}
            className="bg-orange-500 text-gray-800 rounded-md w-40 my-4 grid place-content-center hover:bg-orange-600 focus:border-gray-900 transition-colors disabled:bg-orange-500 disabled:opacity-80 font-medium"
          >Atualizar</button>
      </div>
    </div>
  );
}
