import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Product from './component/product/product';
import ProductDetail from './component/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header
      />
      {/* <Product/> */}
       
      <ProductDetail
      
      />
    </div>
  );
}

export default App;
