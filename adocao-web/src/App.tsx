import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cadastro } from './componentes/cadastro';
import { Login } from './componentes/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
