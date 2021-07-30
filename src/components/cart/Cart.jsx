import React, { useContext, useEffect, useState } from "react";
import { CartContext, RemoveCartContext, AddCartContext } from "./context";

const Cart = () => {
  const items = useContext(CartContext);
  const removeItem = useContext(RemoveCartContext);
  const [cartTotal, setCartTotal] = useState(0);
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);

  const handleClick = (e,item) => {
    e.preventDefault();
  };

  const hideCart = e => {
    const cart = document.body.querySelector('.cart');
    cart.classList.remove('app-header--cart-open');
    const main = document.body.querySelector('.app__wrapper');
    main.classList.remove('brightness');
  };

  const total = () => {
    setCartTotal(items.reduce((accum, item) => accum + item.discountPrice * item.quantity, 0));
  };

  const addItems = useContext(AddCartContext);
  useEffect(() => {
    let prev_items = JSON.parse(localStorage.getItem('cart')) || [];
    addItems(prev_items);
    setIsInitiallyFetched(true);
  }, [])


  useEffect(() => {
    if (isInitiallyFetched) {
      localStorage.setItem("cart", JSON.stringify(items));
      total();
    }
  }, [items]);


  const cartItems = items.map((item, i) => (
    <div className="cart__item" key={i}>
      <img
        //  src='/'
        src={item.img}
        alt="product" />
      <div className="cart__item-info">
        <h2>
          {item.title}
        </h2>
        <div className="cart__item-purchase">
          <span className="cart__item-discount-price">
            {item.discountPrice}
          </span>
          <span className="cart__item-price">
            <strike>{item.price}</strike>
          </span>
        </div>
        <div className="cart__item-btn-group">
          <button
            id='down-count'
          // onClick={this.testClick}
          >
            -
          </button>
          <div>
            {item.count}
          </div>
          <button
            id='up-count'
          // onClick={this.upCount}
          >
            +
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <article className="cart">
      <header>
        <span>
          Cart (
          {
            //   this.state.count
            //   this.props.sendInfoAboutCartItems.map((item) =>{
            //    testCount = testCount + item.count;
            //    this.setState({count:  testCount})
            //    return testCount
            //   })
          }
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
          // <div>Cart is Empty</div>
          <div>{cartItems}</div>
        }

      </div>
      <footer>
        <div className="cart__wrap-info">
          <span>Subtotal</span>
          <span>{cartTotal}</span>
        </div>
        <div className="cart__wrap-btns">
          <button
          // onClick={this.testClick}
          >View cart</button>
          <button>Proceed to checkout</button>
        </div>
      </footer>
    </article>
  );
};

export default Cart;
