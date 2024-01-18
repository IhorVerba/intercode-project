import React from 'react';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';
import productsFromApi from '../../api/products.json';

export const ProductList = () => {
  return (
    <ul className="ProductList">
      {productsFromApi.map(product => (
        <li key={product.id} className="ProductList__item">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
