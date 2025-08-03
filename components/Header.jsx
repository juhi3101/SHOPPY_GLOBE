import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/cartSlice';

function Header({ onSearch }) {
  const items = useSelector(selectCartItems);
  const totalCount = Object.values(items).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart ({totalCount})</Link>
        <input
          type="text"
          placeholder="Search products..."
          onChange={e => onSearch(e.target.value)}
        />
      </nav>
    </header>
  );
}

export default Header;
