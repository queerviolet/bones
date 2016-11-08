import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { totalPrice, formatPrice } from '../../utils'
import LineItemsList from '../products/LineItemsList';

// Table containing multiple orders with expandable rows
export default ({ orders }) => {
    console.log(orders)
    return (
        <div>
        {
            orders && orders.map(order => {
                let orderDateString = `${Number(order.order_date.slice(5, 7))}/${order.order_date.slice(8, 10)}/${order.order_date.slice(0, 4)}`;
                let total = totalPrice(order.lineItems);
                return (
                    <Card key={order.id} initiallyExpanded={false} onExpandChange={() => {}}>
                        <CardHeader
                            title={`Order #${order.confirmation_number} - ${orderDateString}`}
                            subtitle={`Total: ${formatPrice(total)} ~ Status: ${order.status}`}
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        {/*<CardActions>
                            <FlatButton label="Action1" />
                        </CardActions>*/}
                        <CardText expandable={true}>
                        <LineItemsList lineItems={ order.lineItems } inputTotal={ total } />
                        </CardText>
                    </Card>
                )
            })
        }
        </div>
    )
}