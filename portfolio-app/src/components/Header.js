import React from 'react';
import { NavLink } from 'react-router-dom';

const Header =() => (
  <header>
    <h1>Portfolio App</h1>
    <ul>
      <li>
        <NavLink activeClassName="is-active" to="/" exact={ true }>
          Home Page
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="is-active" to="/portfolio" exact={ true }>
          Portfolio
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="is-active" to="/contact">
          Contact Us
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
