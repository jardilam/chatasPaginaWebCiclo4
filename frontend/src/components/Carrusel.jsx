import React from "react";
import {Carousel} from "react-bootstrap";


export default function Carrusel() {
  return (
    <div className="container table-responsive" style={{padding: "20px 70px 20px"}}>
      {/* Inicio Carrusel */}
      <Carousel fade>
        <Carousel.Item>
          <img
            title="Churrasco"
            className="d-block w-100"
            src="https://www.tauruscarnes.com/wp-content/uploads/2020/08/Churrasco-baja-2.jpg"
            height="450"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            title="Lomo de Cerdo"
            className="d-block w-100"
            src="https://carnescastillo.com/wp-content/uploads/2020/04/Lomo-cerdo-crudo.jpg"
            height="450"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            title="Pollo"
            className="d-block w-100 h-450"
            src="https://www.cocinavital.mx/wp-content/uploads/2018/01/rayas-blancas-pollo-crudo-malas.jpg"
            height="450"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* Fin Carrusel */}
    </div>
  );
}
