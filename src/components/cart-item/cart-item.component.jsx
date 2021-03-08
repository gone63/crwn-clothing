import React from "react";

import {
  CartItemStyles,
  ItemDetailsStyles,
  NameStyles,
  PriceStyles,
  ItemImageStyles,
} from "./cart-item.styles";

const CartItem = ({ item: { price, name, imageUrl, quantity } }) => (
  <CartItemStyles>
    <ItemImageStyles src={imageUrl} alt={name} />
    <ItemDetailsStyles>
      <NameStyles>{name}</NameStyles>
      <PriceStyles>
        {quantity} x ${price}
      </PriceStyles>
    </ItemDetailsStyles>
  </CartItemStyles>
);
export default CartItem;
