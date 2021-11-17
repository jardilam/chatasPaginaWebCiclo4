const Productcards = ({ data, addToCart }) => {
  let { id, name, price, description } = data;
  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <br/>
      <h6 style={{textAlign: "left"}}>{description}</h6>
      <br/>
      <h5>${price}.00</h5>
      <br/>
      <button onClick={() => addToCart(id)}>Agregar al carrito</button>
    </div>
  );
};

export default Productcards;
