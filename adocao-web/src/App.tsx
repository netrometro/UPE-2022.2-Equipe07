import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Post from './Pages/Post';

function App() {
  return (
    <Router>
      <Route path='/post' element={<Post />}/>
    </Router>
  );
}

export default App;
