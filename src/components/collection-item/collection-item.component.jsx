import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemStyles,
  ImageStyles,
  CollectionFooterStyles,
  NameStyles,
  PriceStyles,
  CustomButtonStyles,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemStyles>
      <ImageStyles
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterStyles>
        <NameStyles>{name}</NameStyles>
        <PriceStyles>{price}</PriceStyles>
      </CollectionFooterStyles>
      <CustomButtonStyles inverted addToCart onClick={() => addItem(item)}>
        Add to Cart
      </CustomButtonStyles>
    </CollectionItemStyles>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
