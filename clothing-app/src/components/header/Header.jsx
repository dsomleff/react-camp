import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link
      className="logo-container"
      to="/"
    >
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link
        className="option"
        to="/collections"
      >
        COLLECTIONS
      </Link>

      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);

export default Header;
