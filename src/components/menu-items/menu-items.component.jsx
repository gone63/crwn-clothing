import React from "react";

import "./menu-items.styles.scss";

export const MenuItems = ({ title, imageUrl, size }) => (
  <div className={`${size ? size : ""} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h2 className="title">{title}</h2>
      <span>SHOP NOW</span>
    </div>
  </div>
);
