import React from 'react';
import { useSelector } from 'react-redux';
import './ProductList.css'; // Import the CSS file for styling

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <strong>Name:</strong> {product.name},{' '}
            <strong>Can Expire:</strong> {product.canExpire ? 'Yes' : 'No'},{' '}
            {product.canExpire && (
              <span>
                <strong>Expiry Date:</strong> {product.expiryDate},{' '}
              </span>
            )}
            <strong>Category:</strong> {product.category},{' '}
            <strong>Price:</strong> ${product.price.toFixed(2)},{' '}
            <strong>Is Special:</strong> {product.isSpecial ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
