import React from 'react';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn, TableFooter } from 'material-ui'
import LineItem from '../product/LineItem'
import { formatPrice, totalPrice } from '../../utils'

export default ({ lineItems, inputTotal }) => {
  const total = inputTotal ? inputTotal : totalPrice(lineItems);
  return (
    <Table id="product-list">
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Price</TableHeaderColumn>
          <TableHeaderColumn>Quantity</TableHeaderColumn>
          <TableHeaderColumn>Subtotal</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
      {
        lineItems && lineItems.map(item => <LineItem key={item.id} item={item} />)
      }
      </TableBody>
      <TableFooter adjustForCheckbox={false}>
        <TableRow>
          <TableRowColumn style={{textAlign: 'right'}}>
            {`Total: ${formatPrice(total)}`}
          </TableRowColumn>
        </TableRow>
      </TableFooter>
    </Table>
  )
};
