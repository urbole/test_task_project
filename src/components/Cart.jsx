import React, { useEffect, useState } from 'react';
import '../css/cart.scss';
// import CartItem from './cartItem';




function Cart() {

  const [localData, setLocalData] = useState();

  const [cart, setCart] = useState([]);
  
  
  // useEffect(() => {
  //   let cartItem = cart;
    
  //   for (let i = 0; i < localStorage.length; i++) {
      
  //     const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
  //     // console.log('🚀 ~ item', item);
  //     cartItem = cartItem.concat(item);
  //     // setCart(cart.concat(item));
      
      
  //     // setCartItems(()=> [].push(JSON.parse(item)));
  //     // cartItem.push(JSON.parse(item));
  //     // console.log('🚀 ~ cartItems', cartItems);
  //   }
  //   console.log('🚀 ~ cart', cart);
  //   console.log('🚀 ~ cartItem', cartItem);

  // });

  const hideCart = e => {
    const cart = document.body.querySelector('.cart');
    cart.classList.remove('app-header--cart-open');
    const main = document.body.querySelector('.app__wrapper');
    main.classList.remove('brightness');
  };

  return (
    <article className="cart">
      <header>
        <span>
          Cart (
          { }
          items)
        </span>

        <button className="cart__btn-close"
          onClick={hideCart}
        >X</button>
      </header>
      <div className="cart__items">
        {
          // this.props.sendInfoAboutCartItems.length > 0 ?
          //   this.props.sendInfoAboutCartItems.map((item, index) =>
          //     <CartItem
          //       item={item}
          //       key={index}
          //     />
          //   )
          //   :
          //   <div>Cart is Empty</div>
        }
      </div>
      <footer>
        <div className="cart__wrap-info">
          <span>Subtotal</span>
          {/* <span>{this.props.sendInfoAboutCartItems}</span> */}
        </div>
        <div className="cart__wrap-btns">
          <button
          // onClick={this.testClick}
          >View cart</button>
          <button>Proceed to checkout</button>
        </div>
      </footer>
    </article>
  )
}

export default Cart;


  // testClick = () => {
  //   let testCount = 0;
  //   this.props.sendInfoAboutCartItems.map((item) => {
  //     testCount += item.count;
  //     console.log('🚀 ~ Cart ~ testCount', testCount);
  //     console.log('🚀 ~ Cart ~ item.count', item.count);
  //     console.log('🚀 ~ Cart ~ this.state.count', this.state.count);
  //     return this.setState({ count: this.state.count + testCount });
  //   })
  //   // console.log(this.props.sendInfoAboutCartItems[0].count);
  // };

  // total = () => {
  //   let amountItems = [];

  //   this.props.sendInfoAboutCartItems.map((item, i) => {
  //     amountItems.push(item.count)
  //     console.log('🚀 ~ Cart ~ amountItems', amountItems);
  //   }).reduce((accum, item) => accum + item)
  // }