import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../redux/cartSlice';
import CartItem from './CartItem';

function Cart() {
  const itemsObj = useSelector(selectCartItems);
  const items = Object.values(itemsObj);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) return <div>Your cart is empty</div>;

  return (
    <div className="cart">
      {items.map(({ product, quantity }) => (
        <CartItem key={product.id} product={product} quantity={quantity} />
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
