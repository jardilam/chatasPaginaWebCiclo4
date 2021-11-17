import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";


export default function Carrusel() {
  return (
    <div className="container">
      <br />
      {/* Inicio Carrusel */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://carnescastillo.com/wp-content/uploads/2020/05/Churrasco-crudo.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.infogate.cl/wp-content/uploads/2015/12/cerdo.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.cocinavital.mx/wp-content/uploads/2018/01/rayas-blancas-pollo-crudo-malas.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* Fin Carrusel */}
    </div>
  );
}
