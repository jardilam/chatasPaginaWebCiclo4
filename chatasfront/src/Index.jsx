import React from 'react';
import {BrowserRouter as Router,Route, Routes,Redirect} from 'react-router-dom'

import Admin from './Admin.jsx';

import Header from './components/Header'
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer'

const auth = () => {

  const token = sessionStorage.getItem('token');

  if (token) {
    return true;
  }
  else{
    return false;
  }

}

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
