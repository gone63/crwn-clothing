import React from "react";

import "./menu-items.styles.scss";

export const MenuItems = ({ title, imageUrl, size, linkUrl }) => (
  <div className={`${size ? size : ""} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <a className="content" href={linkUrl}>
      <h2 className="title">{title}</h2>
      <span>SHOP NOW</span>
    </a>
  </div>
);
