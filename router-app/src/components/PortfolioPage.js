import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>Check out Our Items</h1>
    <ul>
      <li>
        <Link to="/portfolio/1">Item One</Link>
      </li>
      <li>
        <Link to="/portfolio/2">Item Two</Link>
      </li>
    </ul>
  </div>
);

export default PortfolioPage;
