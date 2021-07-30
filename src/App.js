import React from 'react';
import Header from './components/header';
import ProductCard from './components/productCard';
import { products } from './components/products';
import './App.scss';

function App() {

  const productList = products.map((product, i) =>
    <ProductCard data={product} key={i} />
  );

  return (
    <>
      <div className="app__wrapper">
        <div className='main__wrapper'>
          <Header />
          <div className='product__wrapper'>
            {productList}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;