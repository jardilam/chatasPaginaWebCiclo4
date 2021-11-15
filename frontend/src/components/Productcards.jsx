import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    Button,
    Card
  } from "react-bootstrap";

export default function Productcards() {
  return (
    <div>
        <br/>
        <br/>
      {/* Inicio de las tarjetas de productos */}
      <Container>
        <div className="d-flex justify-content-around">
          {/* Tarjeta 1 */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/frontend/public/Churrasco.jpeg" />
            <Card.Body>
              <Card.Title>Corte 1</Card.Title>
              <Card.Text>Esta sería la descripción del corte.</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          {/* Tarjeta 2 */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/frontend/public/Churrasco.jpeg" />
            <Card.Body>
              <Card.Title>Corte 2</Card.Title>
              <Card.Text>Esta sería la descripción del corte.</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          {/* Tarjeta 3 */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/frontend/public/Churrasco.jpeg" />
            <Card.Body>
              <Card.Title>Corte 3</Card.Title>
              <Card.Text>Esta sería la descripción del corte.</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          {/* Tarjeta 4 */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/frontend/public/Churrasco.jpeg" />
            <Card.Body>
              <Card.Title>Corte 4</Card.Title>
              <Card.Text>Esta sería la descripción del corte.</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          {/* Tarjeta 5 */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/frontend/public/Churrasco.jpeg" />
            <Card.Body>
              <Card.Title>Corte 5</Card.Title>
              <Card.Text>Esta sería la descripción del corte.</Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
      {/* Fin de las tarjetas de productos */}
    </div>
  );
}
