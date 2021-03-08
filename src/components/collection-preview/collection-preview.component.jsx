import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";
import {
  CollectionPreviewStyles,
  TitleStyles,
  PreviewStyles,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewStyles>
    <TitleStyles>{title.toUpperCase()}</TitleStyles>
    <PreviewStyles>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewStyles>
  </CollectionPreviewStyles>
);

export default CollectionPreview;
