import React from 'react';
import { Link } from 'react-router';

export default () => (

  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">CodeCommerce</a>
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
