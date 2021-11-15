import React from 'react'

import Navbar from './components/Admin/Navbardmin'
import Compras from './components/Admin/Comprasadmin'
import Produtos from './components/Admin/Productosadmin'
import Noticias from './components/Admin/Noticiasadmin'
import Usuarios from './components/Admin/Usuariosadmin'


function Admin() {
    return (
      <div>
        <Navbar></Navbar>
        <Compras></Compras>
      </div>
    );
  }

export default Admin
