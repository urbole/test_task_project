import React from 'react';


function CartItem() {

  // downCount = e => this.state.count > 0 ? this.setState({ count: this.state.count - 1 }) : '';
  // upCount = e => this.setState({ count: this.state.count + 1 });

  // testClick = e => {
    // console.log(this.props.item);
  // }



  return (
    <div className="cart__item">
      <img  src='/'
      // src={this.props.item.img}
       alt="product" />
      <div className="cart__item-info">
        <h2>
          {/* {this.props.item.title} */}
        </h2>
        <div className="cart__item-purchase">
          <span className="cart__item-discount-price">
            {/* {this.props.item.discountPrice} */}
          </span>
          <span className="cart__item-price">
            <strike>
              {/* {this.props.item.price} */}
            </strike>
          </span>
        </div>
        <div className="cart__item-btn-group">
          <button
            id='down-count'
            // onClick={this.downCount}
          >
            -
          </button>
          <div>
            {/* {this.state.count} */}
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
  )
}

export default CartItem;