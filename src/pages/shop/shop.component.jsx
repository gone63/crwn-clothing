import React from "react";

import { SHOP_DATA as ShopsData } from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopsData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionData }) => (
          <CollectionPreview key={id} {...otherCollectionData} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
