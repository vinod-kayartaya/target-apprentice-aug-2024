import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    fetch('http://localhost:8080/api/products')
      .then((resp) => resp.json())
      .then(setProducts);
  };

  // life cycle hook
  useEffect(() => {
    loadProducts();
  }, []);

  const productsJsx = products.map((p) => (
    <div key={p.id} className='col-3'>
      <ProductCard product={p} />
    </div>
  ));

  return (
    <>
      <div className='row'>{productsJsx}</div>
    </>
  );
};

export default ProductList;
