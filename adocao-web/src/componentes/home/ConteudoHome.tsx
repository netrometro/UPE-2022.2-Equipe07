import { Route, Routes } from 'react-router-dom';
import { Login } from '../login-cadastro-de-usuario/login';
import { Cadastro } from '../login-cadastro-de-usuario/cadastro';
import { InsercaoDeNovaSenha } from '../login-cadastro-de-usuario/insercaoDeNovaSenha';
import LandingPageHome from './LandingPageHome';
import { RecuperacaoDeConta } from '../../pages/recuperacaoDeConta';


function ConteudoHome() {
    return (
      <>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recuperacao" element={<RecuperacaoDeConta />} />
          <Route path="/seguranca" element={<InsercaoDeNovaSenha />} />
          <Route path="/home" element={<LandingPageHome />} />
        </Routes>
      </>
    );
  }
  
  export default ConteudoHome;