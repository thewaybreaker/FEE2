import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";


function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 10;
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [page]);
  return (
    <div>

      <div className="products">

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

      <button
        disabled={page === 0}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <span style={{margin:"0px 16px", fontSize:"20px"}}> Page {page + 1} </span>

      <button
        disabled={page >= 19}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default ProductList;