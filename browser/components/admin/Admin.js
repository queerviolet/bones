import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ProductList from '../products/ProductList';

// add, remove product
// view orders

const OrderCard = (order) => {
    let convertedDate = "" + Number(order.order_date.substring(5, 7)).toString() + "/" + order.order_date.substring(8, 10) + "/" + order.order_date.substring(0, 4);
    let orderDate = "Ordered on " + convertedDate + " by user " + order.user_id;
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

export default ({adminorders}) => {
    return(
        <div>
            <h1>Add item</h1>
            {

            }
            <h1>Recent orders</h1>
            <div>
            {
                adminorders && adminorders.map(order => OrderCard(order))
            }
            </div>
        </div>
    )
}