import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Carritocompras from './components/Carritocompras';

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/compra" exact component={Carritocompras} />
    </Router>
  );
}

export default App;
