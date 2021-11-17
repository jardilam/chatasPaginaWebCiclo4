import './App.css';
import Navigation from './components/Navigation';
import Productcards from './components/Productcards';
import Carrusel from './components/Carrusel';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <Navigation />
      <Carrusel />
      <ShoppingCart />
    </div>
  );
}

export default App;
