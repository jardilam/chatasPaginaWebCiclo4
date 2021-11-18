import { Button, Collapse } from "react-bootstrap";
const Productcards = ({ data, addToCart }) => {
  let { id, name, price, description } = data;
  return (
    <div style={{ border: "thin solid gray", padding: "1.5rem" }}>
      <h4 style={{textAlign:"center"}}>{name}</h4>
      <br />
      <h6>{description}</h6>
      <br />
      <h5 style={{ textAlign: "center" }}>${price}.00 x Kg</h5>
      <br />
      <div className="d-grid gap-2">
        <Button className="Boton" onClick={() => addToCart(id)}>Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default Productcards;
