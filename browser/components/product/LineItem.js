import React from 'react'
import { Link } from 'react-router';
import {TableRow, TableRowColumn} from 'material-ui'
import { formatPrice } from '../../utils'

export default ({ item }) => {
  let productLink = `/products/${item.product.id}`
  return (
    <TableRow className="line-item">
      <TableRowColumn style={{ padding: 0 }}>
        <img style={{width: "100%", height: "auto"}} src={item.product.images[0]}></img>
      </TableRowColumn>
      <TableRowColumn>
        <Link to={ productLink }>{ item.product.name }</Link>
      </TableRowColumn>
      <TableRowColumn>{ formatPrice(item.price) }</TableRowColumn>
      <TableRowColumn>{ `${item.quantity}x` }</TableRowColumn>
      <TableRowColumn>{ formatPrice(item.price * item.quantity) }</TableRowColumn>
    </TableRow>
  )
};
