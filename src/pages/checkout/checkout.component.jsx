import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";
import { clearCartItem } from "../../redux/cart/cart.actions";

const CheckoutPage = ({ cartItems, cartTotal, clearCartItem }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.length ? (
      cartItems.map((item) => <CheckoutItem cartItem={item} key={item.id} />)
    ) : (
      <span>No Items in cart</span>
    )}

    <div className="total">
      <span>TOTAL: ${cartTotal}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearCartItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
