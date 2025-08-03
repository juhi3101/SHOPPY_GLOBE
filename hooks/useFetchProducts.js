
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetch = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products');
        if (isMounted) {
          setProducts(res.data.products || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Error fetching products');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetch();
    return () => { isMounted = false; };
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
