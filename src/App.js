import React, {useState} from 'react';
import Header from './components/header';
import ProductCard from './components/productCard';
import { products } from './components/products';
import './App.scss';
import Cart from './components/Cart';


function App() {





  return (
    <>
      <Cart />
      <div className="app__wrapper">
        <div className='main__wrapper'>
          <Header />
          <div className='product__wrapper'>
            {
              products.map((product, i) => 
              <ProductCard data={product} key={i} 
              />)
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;