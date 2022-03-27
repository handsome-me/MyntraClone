import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Product from './component/product/product';

function App() {
  return (
    <div className="App">
      <Header
      />
      <Product/>
    </div>
  );
}

export default App;
