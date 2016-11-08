import React from 'react'
import { Link } from 'react-router';
import {TableRow, TableRowColumn} from 'material-ui'
import { formatPrice, categories } from '../../utils'

export default ({ product }) => (
  <TableRow className="product-row">
    <TableRowColumn style={{ padding: 0 }}>
      <img style={{width: "100%", height: "auto"}} src={product.images[0]}></img>
    </TableRowColumn>
    <TableRowColumn>
      <Link to={`/products/${product.id}`}>{ product.name }</Link>
    </TableRowColumn>
    <TableRowColumn>{ formatPrice(product.price) }</TableRowColumn>
    <TableRowColumn>{ `${product.quantity}x` }</TableRowColumn>
    <TableRowColumn>{ categories[product.category] }</TableRowColumn>
  </TableRow>
);
