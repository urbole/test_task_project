import React, { useContext } from "react";
import { products } from '../products';
import { AddCartContext } from "./context";


const Products = () => {
  const addItems = useContext(AddCartContext);

  let count = 0;

  const downCount = e => {
    // this.state.count === 0 ?
    //   document.getElementById('down-count').setAttribute('disabled', 'disabled')
    //   : this.setState({ count: this.state.count - 1 });
  }

  const upCount = e => {
    // document.getElementById('down-count').removeAttribute('disabled', 'disabled')
    // this.setState({ count: this.state.count + 1 });
  
  }

  const handleClick = (e, item) => {
    e.preventDefault();
    addItems(item);
  };

  const listItems = products.map((item, i) => (
    <div className="product" key={i}>
      <div className="product__pictures">
        <img className="product__img" src={item.img} alt="product" />
        <div className="product__prev" >
          {
            item.prev.map((item, index) =>
              <img
                className="product__prev-img"
                src={item}
                key={index}
                alt="preview product"
              />
            )
          }
        </div>
      </div>
      <div className="product__info">
        <h2 className="product__title">{item.title}</h2>
        <div className="product__purchase">
          <span>Choose your length</span>
          <select name="" id="">
            <option>{item.length}</option>
          </select>
          <span className="product__price">{item.price}</span>
        </div>
        <div className="product__buttons">
          <div className="product__btn-group">
            <button
              id='down-count'
              onClick={downCount}
            >
              -
            </button>
            <input type='text' placeholder={item.quantity} disabled />
            <button
              id='up-count'
              onClick={upCount}
            >
              +
            </button>
          </div>
          <button
            className="product__btn-add-cart"
            onClick={e => handleClick(e, item)}
          >
            Add To Cart
          </button>
        </div>
        <div className="product__desc">
          <h4>{item.descTitle}</h4>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>

  ));

  return (
    <>
      {listItems}
    </>
  );
};

export default Products;
