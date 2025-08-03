import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <img src={product.thumbnail} alt={product.title} width="150" />
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
