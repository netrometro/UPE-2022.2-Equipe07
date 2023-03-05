import './App.css';
import { Route, Routes } from 'react-router-dom';
import Post from './Pages/Post';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import Feed from './Pages/Feed';


function App() {
  return (
    <>
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Feed /> } />
        <Route path='/post' element={ <Post /> } />
        <Route path='/show' element={<Show />} />
        <Route path='/Edit' element={<Edit />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
