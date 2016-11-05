import React from 'react';
import { Link } from 'react-router';

/*
The navbar component will render a basic navbar
Navbar has:
  - a home button that links to the homepage
  - a search bar to find items by name
  - a cart button that links to the cart
*/
searchKey: function(data) {
      
    }

export default () => (

  <nav className="navbar navbar-inverse navbar-fixed-top">
    <a id="cart" className="btn" data-placement="bottom" title="Ready to Buy?" >
      <span className="glyphicon glyphicon-shopping-cart"></span>
    </a>
    <div className="container">
      <div className="navbar-header">
        <Link to={"/"}className="navbar-brand">CodeCommerce</Link>
          <div className="form-group">
        <input className="navbar-form navbar-left" role="search"
              type="text" className="form-control" 
              type="search"
              placeholder="BST, loops, etc..."
              onChange={this.searchKey.bind(this)}>
          
          <button type="submit" className="btn btn-default" onSubmit: searchKey({this.props.value})</button>
        </input>
        </div>
      </div>
    </div>
  </nav>
);

