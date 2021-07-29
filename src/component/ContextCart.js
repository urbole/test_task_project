import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { CartContext } from './Cart';


const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className='continue-shopping'>
            <img className='arrow-icon' src={'./images/search.png'} alt='' />
            <h3>continue shopping</h3>
          </div>
          <div className='cart-icon'>
            <img src={'./images/cart.png'} alt='' />
            <p>{totalItem}</p>
          </div>
        </header>
        <section className='main-cart-section'>
          <h1>shopping Cart</h1>
          <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in shopping cart</p>
        </section>
      </>
    )
  }

  return (
    <>
      <header>
        <div className='continue-shopping'>
          <img className='arrow-icon' src={'./images/search.png'} alt='' />
          <h3>continue shopping</h3>
        </div>
        <div className='cart-icon'>
          <img src={'./images/cart.png'} alt='' />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className='main-cart-section'>
        <h1>shopping Cart</h1>
        <p className='total-items'>
          you have <span className='total-items-count'>{totalItem}</span> items in shopping cart
          </p>
        <div className='cart-items'>
          <div className='cart-items-container'>
            <Scrollbars >
              {
                item.map((curItem) => {
                  return <Items key={curItem.id} {...curItem} />;
                })
              }
            </Scrollbars>
          </div>
        </div>
        <div className='card-total'>
          <h3>Cart Total : <span>{totalAmount}</span> UAH</h3>
          <button>Checkout</button>
          <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
        </div>
      </section>
    </>
  )
}

export default ContextCart;