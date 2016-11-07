import React from 'react';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { roundPrice, totalPrice } from '../../utils'
import ProductList from '../products/ProductList';

const OrderCard = (order) => {
    let convertedDate = "" + Number(order.order_date.substring(5, 7)).toString() + "/" + order.order_date.substring(8, 10) + "/" + order.order_date.substring(0, 4);
    let orderDate = "Ordered on " + convertedDate;
    let totalLine = "Total: $temp. Status: " + order.status;
    let lineItems = order.lineItems;
    // console.log('order.lineitems', lineItems);
    return (
        <Card key={order.id} initiallyExpanded={false} onExpandChange={() => {}}>
            <CardHeader
            title={orderDate}
            subtitle={totalLine}
            actAsExpander={true}
            showExpandableButton={true}
            />
            {/*<CardActions>
                <FlatButton label="Action1" />
            </CardActions>*/}
            <CardText expandable={true}>
            <ProductList lineItems={lineItems} />
            </CardText>
        </Card>
    )
}
  

// table (all orders) of orders (cards)
export default ({orders}) => {
    // console.log('orders', orders);
    return (
        <div>
        {
            orders && orders.map(order => {
                return OrderCard(order)
            })
        }
        </div>
    )
}