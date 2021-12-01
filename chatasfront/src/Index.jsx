import React from 'react';

import Header from './components/Header'
import News from './components/Noticias'
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header></Header>
      <News/>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
