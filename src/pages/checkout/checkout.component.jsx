import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutPageContainerStyles,
  CheckoutHeaderStyles,
  HeaderBlockStyles,
  TotalStyles,
  TestWarningStyles,
} from "./checkout.styles";
import { clearCartItem } from "../../redux/cart/cart.actions";

const CheckoutPage = ({ cartItems, cartTotal, clearCartItem }) => (
  <CheckoutPageContainerStyles>
    <CheckoutHeaderStyles>
      <HeaderBlockStyles>
        <span>Product</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Description</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Quantity</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Price</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Remove</span>
      </HeaderBlockStyles>
    </CheckoutHeaderStyles>
    {cartItems.length ? (
      cartItems.map((item) => <CheckoutItem cartItem={item} key={item.id} />)
    ) : (
      <span>No Items in cart</span>
    )}

    <TotalStyles>
      <span>TOTAL: ${cartTotal}</span>
    </TotalStyles>
    <TestWarningStyles className="test-warning">
      *Please use the following card details
      <br />
      Card 4242 4242 4242 4242; Exp 03/22 ; CVV 123
    </TestWarningStyles>
    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainerStyles>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearCartItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
