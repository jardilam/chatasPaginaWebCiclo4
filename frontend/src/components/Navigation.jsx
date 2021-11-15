import React from "react";
import {Navbar, Nav, NavDropdown, Container, Offcanvas, Form, Button, FormControl, Card} from "react-bootstrap";



export default function Navigation() {
  return (
    <div>
        {/* Inicio de la barra de navegación */}
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="#">Productos</Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Chata's
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Inicio</Nav.Link>
                <NavDropdown title="Productos" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action2">Res </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Cerdo </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Pollo </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action5">Noticias</Nav.Link>
                <Nav.Link href="#action6">Contactenos</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* Fin de la barra de navegación */}
      {/* Inicio de las tarjetas de productos */}
      {/* Tarjeta 1 */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" 
        src="/frontend/public/Churrasco.jpeg" 
        />
        <Card.Body>
          <Card.Title>Corte 1</Card.Title>
          <Card.Text>
            Esta sería la descripción del corte.
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      {/* Tarjeta 2 */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" 
        src="/frontend/public/Churrasco.jpeg" 
        />
        <Card.Body>
          <Card.Title>Corte 2</Card.Title>
          <Card.Text>
            Esta sería la descripción del corte.
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      {/* Tarjeta 3 */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" 
        src="/frontend/public/Churrasco.jpeg" 
        />
        <Card.Body>
          <Card.Title>Corte 3</Card.Title>
          <Card.Text>
            Esta sería la descripción del corte.
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      {/* Tarjeta 4 */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" 
        src="/frontend/public/Churrasco.jpeg" 
        />
        <Card.Body>
          <Card.Title>Corte 4</Card.Title>
          <Card.Text>
            Esta sería la descripción del corte.
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      {/* Tarjeta 5 */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" 
        src="/frontend/public/Churrasco.jpeg" 
        />
        <Card.Body>
          <Card.Title>Corte 5</Card.Title>
          <Card.Text>
            Esta sería la descripción del corte.
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      {/* Fin de las tarjetas de productos */}
    </div>
  );
}
