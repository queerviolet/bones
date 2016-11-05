import React from 'react'
import { Link } from 'react-router';
import {TableRow, TableRowColumn} from 'material-ui'
import { roundPrice } from '../../utils'

export default ({ item }) => {
  return (
    <TableRow className="line-item">
      <TableRowColumn style={{ padding: 0 }}>
        <img src={item.product.images[0]}></img>
      </TableRowColumn>
      <TableRowColumn>{item.product.name}</TableRowColumn>
      <TableRowColumn>{`$${roundPrice(item.price)}`}</TableRowColumn>
      <TableRowColumn>{`${item.quantity}x`}</TableRowColumn>
      <TableRowColumn>{`$${roundPrice(item.price * item.quantity)}`}</TableRowColumn>
    </TableRow>
  )
  };
