import React from 'react'


const Navbardmin = () => {
    
    return (
        <>
            <h1 class="visually-hidden">Sidebars examples</h1>

        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
            <a href="https://getbootstrap.com/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src="./assets/img/chatas/chatas2.jpeg" class="img-fluid rounded logo" alt="chatas"/>
                &nbsp;&nbsp;&nbsp;
                <span class="fs-4">Chata's </span>
            </a>
            <hr/>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                <i class="bi bi-house"></i> &nbsp;
                    Home
                </a>
                </li>
                <li>
                <a href="#" class="nav-link text-white">
                    <i class="bi bi-table"></i> &nbsp;
                    Orders
                </a>
                </li>
                <li>
                <a href="#" class="nav-link text-white">
                    <i class="bi bi-bag"></i> &nbsp;
                    Products
                </a>
                </li>
                <li>
                <a href="#" class="nav-link text-white">
                    <i class="bi bi-people"></i> &nbsp;
                    Customers
                </a>
                </li>
                <li>
                <a href="#" class="nav-link text-white">
                    <i class="bi bi-newspaper"></i> &nbsp;
                    News
                </a>
                </li>
            </ul>
            <hr/>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./assets/img/chatas/chatasLogo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                <strong>Opctions</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
            </div>

            <div class="b-example-divider"></div>
            &nbsp;
            &nbsp;
            <div>
            <h1>Usuarios</h1>
            <div class="card">
            <div class="card-header">
                Lista de usuarios
            </div>
            <div class="card-body">
                <button type="button" class="btn btn-secondary">Agregar nuevo usuario</button>
                <br/><br/>
                <div class="table-responsive">
                <table class="table table-bordered align-middle table-striped">
                    <tbody>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Fecha de nacimiento</th>
                        <th>Ultima fecha de inicio</th>
                        <th>Acciones</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Juan Camilo Torres</td>
                        <td>jucato@mail.com</td>
                        <td>12-11-2021 17:35:15 </td>
                        <td>15.000</td>
                        <td>
                        <button type="button" class="btn btn-success">Editar</button> | 
                        <button type="button" class="btn btn-danger">Eliminar</button>
                        
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>

        </div>

        </>
    )
}

export default Navbardmin
