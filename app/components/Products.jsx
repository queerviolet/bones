'use strict'

import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import { products } from 'APP/app/reducers/products';

export const Products = ({ products }) => (
  <div>
    <h1>Selleb</h1>
    <h3>Your source for celeb memoribilia</h3>
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
      <tbody>
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


const mapStateToProps = ({products}) => ({ products })

export default connect(mapStateToProps)(Products);


