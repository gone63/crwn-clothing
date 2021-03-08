import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartIconStyles,
  ShoppingCartIcon,
  ItemCountStyles,
} from "./cart-icon.styles";

const CartIcon = ({ cartCount, toggleCartHidden }) => (
  <CartIconStyles onClick={toggleCartHidden}>
    <ShoppingCartIcon />
    <ItemCountStyles>{cartCount}</ItemCountStyles>
  </CartIconStyles>
);

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
