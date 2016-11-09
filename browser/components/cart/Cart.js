import React from 'react';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon'
import { formatPrice } from '../../utils';

const style = {
  margin: 12,
};

export default ({cartProducts, handleQuantityChange, removeProductFromCart }) => {
    var total = 0;
    cartProducts.forEach(item => {
        total += (item.quantity * item.product.price)
    })

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
            <TableBody displayRowCheckbox={false}>
                {
                    cartProducts && cartProducts.map(item => {
                        let productLink = `/products/${item.product.id}`
                        return (
                        <TableRow key={item.id}>
                            <TableRowColumn>
                                <img style={{width: "100%", height: "auto"}} src={item.product.images[0]} alt="" />
                            </TableRowColumn>
                            <TableRowColumn>
                                <Link to={productLink}>
                                    {item.product.name}
                                </Link>
                            </TableRowColumn>
                            <TableRowColumn>{ formatPrice(item.product.price) }</TableRowColumn>
                            <TableRowColumn>
                                <TextField
                                style={{width:"55%", minWidth: "40px"}}
                                value={item.quantity}
                                type="number"
                                onChange={(event) => {handleQuantityChange(item.product.id, event.target.value)}}
                                />
                            </TableRowColumn>
                            <TableRowColumn>
                                { formatPrice(item.product.price * item.quantity) }
                            </TableRowColumn>
                            <TableRowColumn style={{maxWidth:"10px"}}>
                                <FontIcon
                                    className="material-icons item-delete"
                                    style={{color: 'red'}}
                                    onClick={() => removeProductFromCart(item.product.id)}>
                                    clear
                                </FontIcon>
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
                    <TableHeaderColumn>{ formatPrice(total) }</TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                </TableRow>
                <TableRow>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                    <TableHeaderColumn>
                        <Link to="/checkout">
                            <RaisedButton
                                disabled={!cartProducts.length}
                                label="Buy"
                                backgroundColor="#2b4b91"
                                labelStyle={{color: 'white'}}
                                style={style}
                            />
                        </Link>
                    </TableHeaderColumn>
                    <TableHeaderColumn>{}</TableHeaderColumn>
                </TableRow>
            </TableFooter>
        </Table>
    </div>

  	)
  };