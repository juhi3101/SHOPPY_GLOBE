import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

function ProductList({ searchTerm }) {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <div>Loading Products...</div>;
  if (error) return <div>{error}</div>;

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filtered.map(p => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
