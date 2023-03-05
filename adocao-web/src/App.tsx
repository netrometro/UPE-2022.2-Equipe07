import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Post from './Pages/Post';
import Show from './Pages/Show';
import Edit from './Pages/Edit';

function App() {
  return (
    <Router>
      <Route path='/post' element={<Post />} />
      <Route path='/show' element={<Show />} />
      <Route path='/Edit' element={<Edit />} />
    </Router>
  );
}

export default App;
