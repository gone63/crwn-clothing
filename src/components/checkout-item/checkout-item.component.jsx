import React from "react";

import { connect } from "react-redux";

import {
  clearCartItem,
  addItem,
  decreaseQuantyForItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemStyles,
  ImageContainerStyles,
  ImageStyles,
  NameStyles,
  QuantityStyles,
  ArrowStyles,
  ValueStyles,
  RemoveButtonStyles,
} from "./checkout-item.styles";

const CheckoutItem = ({
  cartItem,
  clearCartItem,
  addItem,
  decreaseQuantyForItem,
}) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <CheckoutItemStyles>
      <ImageContainerStyles>
        <ImageStyles alt="item" src={imageUrl} />
      </ImageContainerStyles>
      <NameStyles>{name}</NameStyles>
      <QuantityStyles>
        <ArrowStyles onClick={() => decreaseQuantyForItem(cartItem)}>
          &#10094;
        </ArrowStyles>
        <ValueStyles>{quantity}</ValueStyles>
        <ArrowStyles onClick={() => addItem(cartItem)}>&#10095;</ArrowStyles>
      </QuantityStyles>
      <NameStyles>${price}</NameStyles>
      <RemoveButtonStyles onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </RemoveButtonStyles>
    </CheckoutItemStyles>
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
