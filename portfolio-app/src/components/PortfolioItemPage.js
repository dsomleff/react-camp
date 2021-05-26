import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItemPage = (props) => (
  <div>
    <h3>Here is Item # { props.match.params.id }</h3>
    <Link to="/portfolio">Back</Link>
  </div>
);

export default PortfolioItemPage;
