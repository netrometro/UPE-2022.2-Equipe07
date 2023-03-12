import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cadastro } from './pages/cadastro';
import { Home } from './pages/home';
import { InsercaoDeNovaSenha } from './pages/insercaoDeNovaSenha';
import { Login } from './pages/login';
import { Perfil } from './pages/perfil';
import { RecuperacaoDeConta } from './pages/recuperacaoDeConta';
import { CadastroNovoAnimal } from './componentes/perfil-e-cadastro-do-animal/CadastroNovoAnimal';
import { CadastroAnimalConcluido } from './componentes/perfil-e-cadastro-do-animal/CadastroAnimalConcluido';
import { PerfilAnimal } from './componentes/perfil-e-cadastro-do-animal/indexPerfilAnimal';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Login' element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperacao" element={<RecuperacaoDeConta />} />
        <Route path="/seguranca" element={<InsercaoDeNovaSenha />} />
        <Route path='/usuario/perfil' element={<Perfil />} />
        <Route path='/animal/cadastro' element={<CadastroNovoAnimal />} />
        <Route path='/animal/cadastro/concluido' element={<CadastroAnimalConcluido />} />
        <Route path='/animal/perfil' element={<PerfilAnimal />} />
      </Routes>
    </div>
  );
}

export default App;
