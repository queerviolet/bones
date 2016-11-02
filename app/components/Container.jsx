import React, { Component } from 'react';
import {connect} from 'react-redux'

export const Container = ({}) => {
  console.log('in navbar')
  return (
    <nav>
      <div id="nav-top">
        <div>
          <h1>$elleb</h1>
          <span>Your source for celebrity memoribilia</span>
        </div>
        <ul>
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </div>
      <div id="main-menu">
        <ul>
          <li>All</li>
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
  )
}

export default connect (
  state => ({}),
  null
) (Container)
