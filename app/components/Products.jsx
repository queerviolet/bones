'use strict'

import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

export class Products extends React.Component {
  render() {
    const { products } = this.props || []
    return (
      <div id="productsTable">
        <h2>All Products</h2>
        <table type="productsList">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Description</th>
              <th>Categories</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody id="mainTable">
            {
              products && products.map(product => (
                <tr key={product.id}>
                  <td>
                    <img src={product.photoURL}/>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.categories}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))
            }  
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  products: state.products })

export default connect(mapStateToProps)(Products);


