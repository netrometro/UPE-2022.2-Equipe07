import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cadastro } from './pages/cadastro';
import { Home } from './pages/home';
import { InsercaoDeNovaSenha } from './pages/insercaoDeNovaSenha';
import { Login } from './pages/login';
import { Parceiros } from './pages/parceiro';
import { Perfil } from './pages/perfil';
import { RecuperacaoDeConta } from './pages/recuperacaoDeConta';

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
        <Route path='/parceiros' element={<Parceiros/>} />
      </Routes>
    </div>
  );
}

export default App;
