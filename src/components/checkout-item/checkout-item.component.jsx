import React from "react";

import { connect } from "react-redux";

import {
  clearCartItem,
  addItem,
  decreaseQuantyForItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  clearCartItem,
  addItem,
  decreaseQuantyForItem,
}) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQuantyForItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
// });

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearCartItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseQuantyForItem: (item) => dispatch(decreaseQuantyForItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
