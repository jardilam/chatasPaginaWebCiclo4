import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Navbar from './components/Admin/Navbardmin';




const auth = () => {

  const token = sessionStorage.getItem('token');

  if (token) {
    return true;
  }
  else {
    return false;
  }

}

const rol = () => {

  const rol = sessionStorage.getItem('rol');
  if (rol === 'ADMIN') {
    return true;
  }
  else {
    return false;
  }

}


function Admin() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}

export default Admin
