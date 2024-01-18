import React from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;
