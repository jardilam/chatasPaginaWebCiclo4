import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Carritocompras from './components/Carritocompras';
import Productcards from './components/Productcards';
import Carrusel from './components/Carrusel';

function App() {
  return (
    <Router>
      <Navigation />
      <Carrusel />
      <Productcards />
      <Route path="/compra" exact component={Carritocompras} />
    </Router>
  );
}

export default App;
