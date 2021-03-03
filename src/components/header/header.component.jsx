import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </div>
  </div>
);

const mapStatesToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });
export default connect(mapStatesToProps)(Header);
