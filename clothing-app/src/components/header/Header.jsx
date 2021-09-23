import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import './header.styles.scss';

const Header = ({ hidden }) => (
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
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden
});

export default connect(mapStateToProps)(Header);
