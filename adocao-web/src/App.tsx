import './App.css';
import { Route, Routes } from 'react-router-dom';
import Post from './Pages/Post';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import Feed from './Pages/Feed';
import CadastroNovoAnimal from './Componentes/CadastroNovoAnimal';
import PerfilAnimal from './Componentes/PerfilAnimal';


function App() {
  return (
    <>
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Feed /> } />
        <Route path='/post' element={ <Post /> } />
        <Route path='/show' element={<Show />} />
        <Route path='/Edit' element={<Edit />} />
        <Route path='/animal/new' element={<CadastroNovoAnimal />} />
        <Route path='/perfilanimal' element={<PerfilAnimal />} /> 
      </Routes>
    </div>
    </>
  );
}

export default App;
