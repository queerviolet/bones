import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';


export class Container extends Component {
  render() {
    console.log(this)
    return (
      <div>
      <nav>
        <div id="nav-top">
          <div>
            <h1>$elleb</h1>
            <span>Your source for celebrity memoribilia</span>
          </div>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li>Cart</li>
          </ul>
        </div>
        <div id="main-menu">
          <ul>
            <li><Link to='/'>All</Link></li>
            <li>Browse by Category</li>
            <li>Browse by Celebrity</li>
            <li>Search by Keyword</li>
          </ul>
        </div>
      </nav>
      {this.props.children}
      <footer>
        <p>$elleb<br/>&copy; 2016</p>
      </footer>
      </div>
    )}
}

export default connect (
  state => ({}),
  null
) (Container)
