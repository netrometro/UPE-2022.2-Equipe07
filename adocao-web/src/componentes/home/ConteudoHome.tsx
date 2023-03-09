import { Route, Routes } from 'react-router-dom';
import { Login } from '../login-cadastro-de-usuario/login';
import { Cadastro } from '../login-cadastro-de-usuario/cadastro';
import { RecuperacaoDeConta } from '../recuperacaoDeConta/index';
import { InsercaoDeNovaSenha } from '../login-cadastro-de-usuario/insercaoDeNovaSenha';
import LandingPageHome from './LandingPageHome';
import { CadastroAnimalConcluido } from '../perfil-e-cadastro-do-animal/CadastroAnimalConcluido';
import { CadastroNovoAnimal } from '../perfil-e-cadastro-do-animal/CadastroNovoAnimal';


function ConteudoHome() {
    return (
      <>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperacao" element={<RecuperacaoDeConta />} />
          <Route path="/seguranca" element={<InsercaoDeNovaSenha />} />
          <Route path="/home" element={<LandingPageHome />} />
          <Route path="/animal/cadastro" element={<CadastroNovoAnimal />} />
          <Route path="/animal/cadastro/concluido" element={<CadastroAnimalConcluido />} />
        </Routes>
      </>
    );
  }
  
  export default ConteudoHome;