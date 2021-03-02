import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h2 className="title">{title.toUpperCase()}</h2>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemsData }) => (
          <CollectionItem key={id} {...otherItemsData} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
