import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, changeQuantity } from '../redux/cartSlice';

function CartItem({ product, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h4>{product.title}</h4>
      <p>Price: ₹{product.price}</p>
      <p>
        Qty:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e =>
            dispatch(changeQuantity({ id: product.id, quantity: Number(e.target.value) }))
          }
        />
      </p>
      <button onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
    </div>
  );
}

export default CartItem;
