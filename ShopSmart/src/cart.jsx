function Cart({ cart, setCart }) {

  function increase(id) {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  }

  function decrease(id) {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3 style={{fontSize:"20px"}}>{item.title}</h3>
          <p style={{fontSize:"18px"}}>Price: ${item.price}</p>
          <button onClick={() => decrease(item.id)}>
            -
          </button>
          <span style={{margin:"0px 16px", fontSize:"20px"}}>{item.quantity}</span>
          <button onClick={() => increase(item.id)}>
            +
          </button>
        </div>
      ))}
      <h2 style={{fontSize:"20px"}}>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;