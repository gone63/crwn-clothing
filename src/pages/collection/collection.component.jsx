import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionPageContainerStyles,
  TitleStyles,
  ItemStyles,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  if (collection) {
    const { title, items } = collection;
    return (
      <CollectionPageContainerStyles>
        <TitleStyles>{title}</TitleStyles>
        <ItemStyles>
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </ItemStyles>
      </CollectionPageContainerStyles>
    );
  }
  return (
    <CollectionPageContainerStyles>
      <TitleStyles>No Items available for this Collection type.</TitleStyles>
    </CollectionPageContainerStyles>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
