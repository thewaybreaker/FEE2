import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./cart";
import './App.css';
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
function App() {

  const [cart, setCart] = useState([]);

  function addToCart(product) {

    const existing = cart.find(
      item => item.id === product.id
    );

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  return (
    <>
      <nav>
        <h1 className="nav-title">ShopSmart</h1>

      </nav>
      <main>
        <p className="hero-title">SIMPLE ONLINE STORE</p>
        <p className="hero-brief">Browse products and add your favourites to the cart.</p>
        <SearchBar />
        <ProductList addToCart={addToCart} />

        <Cart cart={cart} setCart={setCart} />
      </main>
    </>
  );
}

export default App;