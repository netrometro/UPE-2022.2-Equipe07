import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cadastro } from './componentes/cadastro';
import { Login } from './componentes/login';
import { RecuperacaoDeConta } from './componentes/recuperacaoDeConta';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperacao" element={<RecuperacaoDeConta />} />
      </Routes>
    </div>
  );
}

export default App;
