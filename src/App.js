import React from 'react';
import Header from './components/header';
import Cart from "./components/cart/Cart";
import { CartProvider } from "./components/cart/context";
import Products from "./components/cart/Products";

import './App.scss';



function App() {


  return (
    <>
      <CartProvider>
        <Cart />
      <div className="app__wrapper">
        <div className='main__wrapper'>
          <Header />
          <div className='product__wrapper'>
            {
              // products.map((product, i) => <Product data={product} key={i} />)
              <Products />
            }
          </div>
        </div>
      </div>
      </CartProvider>
    </>
  );
}

export default App;