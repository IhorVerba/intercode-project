import React from 'react';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';
import { productsData } from '../../api/products';

export const ProductList = () => {
  
  return (
    <ul className="ProductList">
      {productsData.map(product => (
        <li key={product.id} className="ProductList__item">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
