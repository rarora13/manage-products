import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [canExpire, setCanExpire] = useState(false);
  const [expiryDate, setExpiryDate] = useState('');
  const [category, setCategory] = useState('vegetables');
  const [price, setPrice] = useState(0.0);
  const [isSpecial, setIsSpecial] = useState(false);

  const handleAddProduct = () => {
    if (productName.trim() !== '') {
      dispatch(
        addProduct({
          name: productName,
          canExpire,
          expiryDate,
          category,
          price,
          isSpecial
        })
      );
      setProductName('');
      setCanExpire(false);
      setExpiryDate('');
      setCategory('vegetables');
      setPrice(0.0);
      setIsSpecial(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <label>
        Can Expire:
        <input
          type="checkbox"
          checked={canExpire}
          onChange={() => setCanExpire(!canExpire)}
        />
      </label>
      {canExpire && (
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      )}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="vegetables">Vegetables</option>
        <option value="meat">Meat</option>
        <option value="furniture">Furniture</option>
        <option value="electronics">Electronics</option>
      </select>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <label>
        Is Special:
        <input
          type="checkbox"
          checked={isSpecial}
          onChange={() => setIsSpecial(!isSpecial)}
        />
      </label>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
