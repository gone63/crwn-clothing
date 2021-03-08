import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownStyles,
  CartItemStyles,
  EmptyCartStyles,
  CustomButtonStyles,
} from "./cart-dropdown.styles";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownStyles>
    <CartItemStyles>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem item={item} key={item.id} />)
      ) : (
        <EmptyCartStyles>Your cart is empty</EmptyCartStyles>
      )}
    </CartItemStyles>
    <CustomButtonStyles
      type="button"
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButtonStyles>
  </CartDropdownStyles>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
