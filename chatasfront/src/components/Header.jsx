import React, { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
            <nav
            className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top py-3"
            id="mainNav"
            >
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top"
                ><img src="./assets/img/chatas/chatas2.jpeg" className="img-fluid rounded logo" alt="chatas"
                /></a>
                <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#about">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Nuestros Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#noticias">Noticias</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#services">Quienes Somos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contacto">Quienes Somos</a>
                    </li>
                    
                    |
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#registroModal">Reigistrarse</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Iniciar sesion</a>
                    </li>
                    </ul>
                </ul>
                </div>
            </div>
            </nav>
            
            <div className="modal fade" id="registroModal" tabindex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="card text-center">
                    <div className="card-header">
                    Registro
                    </div>
                    <div className="card-body">
                    <form action="" method="post">
                        <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre Completo:</label>
                        <input type="text" className="form-control" id="nombreForm"/>
                        </div>
                        <div className="mb-3">
                        <label for="contrasena" className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" id="constrasenaForm"/>
                        </div>
                        <div className="mb-3">
                        <label for="fecha" className="form-label">Fecha de naciemiento:</label>
                        <input type="date" className="form-control" id="fechaForm"/>
                        </div>
                        <button type="submit" className="btn btn-secondary">Registrar</button>
                    </form>
                    </div>
                    <div className="card-footer text-muted">
                    Ingresa tus datos
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="card text-center">
                    <div className="card-header">
                    Iniciar sesion
                    </div>
                    <div className="card-body">
                    <form action="" method="post">
                        <div className="mb-3">
                        <label for="correo" className="form-label">Correo electronico:</label>
                        <input type="email" className="form-control" id="correoForm"/>
                        </div>
                        <div className="mb-3">
                        <label for="contrasenaLogin" className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" id="constrasenaLoginForm"/>
                        </div>
                        <button type="submit" className="btn btn-secondary">Ingresar</button>
                    </form>
                    </div>
                    <div className="card-footer text-muted">
                    Ingresa tus datos
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div
                className="
                    row
                    gx-4 gx-lg-5
                    h-100
                    align-items-center
                    justify-content-center
                    text-center
                "
                >
                <div className="col-lg-8 align-self-end">
                    <h1 className="text-white font-weight-bold">
                        <img src="./assets/img/chatas/fraseHeader.png" className="img-fluid" alt=""/>
                    </h1>
                    <hr className="divider" />
                </div>
                <div className="col-lg-8 align-self-baseline">
                    <img src="./assets/img/chatas/comprarCarrito.png" className="img-fluid" alt=""/>
                </div>
                </div>
            </div>
            </header>
        </Fragment>
    )
}

export default Header
