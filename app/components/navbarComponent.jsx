import React from 'react';
import { Link } from 'react-router';

/*
The navbar component will render a basic navbar
Navbar has:
  - a home button that links to the homepage
  - a search bar to find items by name
  - a cart button that links to the cart
*/

export default () => (

  <nav className="navbar navbar-inverse navbar-fixed-top">
    <a id="cart" className="btn" data-placement="bottom" title="Ready to Buy?" >
      <span className="glyphicon glyphicon-shopping-cart"></span>
    </a>
    <div className="container">
      <div className="navbar-header">
        <Link to={"/"}className="navbar-brand">CodeCommerce</Link>
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="BST, loops, etc..."></input>
          </div>
          <button type="submit" className="btn btn-default">Search</button>
        </form>
      </div>
    </div>
  </nav>
);

