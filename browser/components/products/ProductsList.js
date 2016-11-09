import React from 'react';
import { Table, TableHeader, TableHeaderColumn,
         TableBody, TableRow, TableRowColumn, TableFooter } from 'material-ui'
import AddProductContainer from '../product/AddProductContainer'
import ProductRow from '../product/ProductRow'

export default ({ products, deleteProduct }) => {
  return (
    <div id="product-list">
      <AddProductContainer />
      <Table style={{ overflow: 'initial' }}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>In Stock</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {
          products && products.map( product =>
            <ProductRow key={ product.id }
              product={ product }
              deleteProduct={ deleteProduct }
            />
          )
        }
        </TableBody>
      </Table>
    </div>
  )
};
