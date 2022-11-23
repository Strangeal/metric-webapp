import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <h2>404</h2>
    <p>Page not found</p>
    <Link to="/">
      <span>Back to home page</span>
    </Link>
  </div>
);

export default NotFound;
