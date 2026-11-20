function ProductCard({ product, addToCart }) {

  return (
    <div className="card">

      <img src={product.thumbnail} width="200px" />

      <h1 className="title">{product.title}</h1>
      <p className="price">Price: ${product.price}</p>
      <p className="rating">Rating: {product.rating}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;