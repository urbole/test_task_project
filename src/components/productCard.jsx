import React, { useState } from 'react';

import '../css/productCard.scss';




function ProductCard({ data }) {

  const [count, setCount] = useState(0);
  const [localData, setLocalData] = useState(
    localStorage.setItem('cart', {})
  );
  // const [localData, setLocalData] = useState(localStorage);

  let localstorage = {
    set: function (key, value) {
        window.localStorage.setItem( key, JSON.stringify(value) );
    },
    get: function (key) {
        try {
            return JSON.parse( window.localStorage.getItem(key) );
        } catch (e) {
            return null;
        }
    }
};


  return (
    <>
      <main className="product">
        <div className="product__pictures">
          <img className="product__img" src={data.img} alt="product" />
          <div className="product__prev" >
            {
              data.prev.map((item, index) =>
                <img className="product__prev-img" src={item} key={index} alt="preview product" />)
            }
          </div>
        </div>
        <div className="product__info">
          <h2 className="product__title">
            {data.title}
          </h2>
          <div className="product__purchase">
            <span>Choose your length</span>
            <select>
              <option>
                {data.length}
              </option>
            </select>
            <span className="product__price">{data.price}</span>
          </div>
          <div className="product__buttons">
            <div className="product__btn-group">
              <button id='down-count' onClick={count > 0 ? () => setCount(count - 1) : null}>-</button>
              <div>{count}</div>
              <button id='up-count' onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className="product__btn-add-cart"
              onClick={
                () => {
                  if (count > 0) {
                    document.getElementById('header-cart-count').classList.add('not-empty');
                    data.quantity = count;
                    
                    setLocalData(() => {
                      localStorage.setItem('cart', JSON.stringify(data));
                      // localStorage.setItem('cart',JSON.stringify(data))
                    });
                    // console.log('🚀 ~ data', data);
                    console.log('🚀 ~ localData', localData);
                    setCount(0);
                  }
                }

              }>Add To Cart</button>
          </div>
          <div className="product__desc">
            <h4>{data.descTitle}</h4>
            <p>{data.desc}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductCard;