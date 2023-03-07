import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cadastro } from './componentes/cadastro';
import { Home } from './componentes/home';
import { InsercaoDeNovaSenha } from './componentes/insercaoDeNovaSenha';
import { Login } from './componentes/login';
import { RecuperacaoDeConta } from './componentes/recuperacaoDeConta';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperacao" element={<RecuperacaoDeConta />} />
        <Route path="/seguranca" element={<InsercaoDeNovaSenha />} />
      </Routes>
    </div>
  );
}

export default App;
