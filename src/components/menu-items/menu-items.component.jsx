import React from "react";

import {
  MenuItemStyles,
  BackgroundImgStyles,
  ContentStyles,
  TitleStyles,
} from "./menu-items.styles";

export const MenuItems = ({ title, imageUrl, size, linkUrl }) => (
  //className={`${size ? size : ""} menu-item`}
  <MenuItemStyles size={size}>
    <BackgroundImgStyles
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></BackgroundImgStyles>
    <ContentStyles href={linkUrl}>
      <TitleStyles className="title">{title}</TitleStyles>
      <span>SHOP NOW</span>
    </ContentStyles>
  </MenuItemStyles>
);
