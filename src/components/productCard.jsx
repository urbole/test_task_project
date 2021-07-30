import React from 'react';

import '../css/productCard.scss';

const downCount = e => {
  this.state.count === 0 ?
    document.getElementById('down-count').setAttribute('disabled', 'disabled')
    : this.setState({ count: this.state.count - 1 })
};

const upCount = e => {
  document.getElementById('down-count').removeAttribute('disabled', 'disabled')
  this.setState({ count: this.state.count + 1 });
};

const addProduct = () => {
  // const data = {
    // count: this.state.count,
    // idItem: this.state.idItem,
    // img: this.state.img,
    // title: this.state.title,
    // length: this.state.length,
    // price: this.state.price,
  // };

  if (this.state.count > 0) {
    document.getElementById('header-cart-count').classList.add('not-empty');

    // this.props.dataFormProductCard(data);
    // this.setState({ count: 0 });

  }
};

const ProductCard = ({ data }) => {

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
              <button id='down-count' onClick={downCount}>-</button>
              <div>
                {/* {this.state.count} */}
              </div>
              <button id='up-count' onClick={upCount}>+</button>
            </div>
            <button className="product__btn-add-cart" onClick={addProduct}>Add To Cart</button>
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