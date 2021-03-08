import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/director.selectors";

import { MenuItems } from "../../components/menu-items/menu-items.component";

import { DirectoryStyles } from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryStyles>
    {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
      <MenuItems
        title={title}
        imageUrl={imageUrl}
        key={id}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </DirectoryStyles>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
