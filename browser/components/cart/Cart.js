import React from 'react'
import { Link } from 'react-router'
import { RaisedButton } from 'material-ui'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { roundPrice } from '../../utils';

const style = {
  margin: 12,
};

// const BuyButton = () => (
//   <div>
//     <RaisedButton label="Buy" primary={true} style={style} href="/checkout" />
//   </div>
// );

const XButton = (item, removeProductFromCart) => {
    return (
        <div>
            <RaisedButton
                onClick={() => removeProductFromCart(item.product.id)}
                label="x"
                secondary={true}
                style={{margin:0}}
                fullWidth={false} />
        </div>
    )
  
};

export default ({cartProducts, handleQuantityChange, removeProductFromCart }) => {
    var total = 0;
    cartProducts.forEach(item => {
        total += (item.quantity * item.product.price)
    })
    total = roundPrice(total);

  return (
    <div id="cart" className="col-xs-12">
    	<h1><b>Cart</b></h1>
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn>{}</TableHeaderColumn>
                <TableHeaderColumn>Item</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
                <TableHeaderColumn>Quantity</TableHeaderColumn>
                <TableHeaderColumn>Subtotal</TableHeaderColumn>
                <TableHeaderColumn>{}</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
                {
                    cartProducts && cartProducts.map(item => {
                        return (
                        <TableRow key={item.id}>
                            <TableRowColumn>
                                <img src={item.product.images[0]} alt="" />
                            </TableRowColumn>
                            <TableRowColumn>{item.product.name}</TableRowColumn>
                            <TableRowColumn>${roundPrice(item.product.price)}</TableRowColumn>
                            <TableRowColumn>
                                <TextField
                                value={item.quantity}
                                type="number"
                                onChange={(event) => {handleQuantityChange(item.product.id, event.target.value)}}
                                />
                            </TableRowColumn>
                            <TableRowColumn>
                                ${roundPrice(item.product.price * item.quantity)}
                            </TableRowColumn>
                            <TableRowColumn>
                                {
                                    XButton(item, removeProductFromCart)
                                }
                            </TableRowColumn>
                        </TableRow>
                        )
                    })
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn><b>TOTAL:</b></TableHeaderColumn>
                    <TableHeaderColumn>${total}</TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                </TableRow>
                <TableRow>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn>
                        <Link to="/checkout">
                            <RaisedButton disabled={!cartProducts.length} label="Buy" primary={true} style={style} />
                        </Link>
                    </TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                </TableRow>
            </TableFooter>
        </Table>
    </div>

  	)
  };