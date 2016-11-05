import React from 'react';
import { Link } from 'react-router';
import ProductList from '../products/ProductList'
import { RaisedButton } from 'material-ui';
import { white, green500 } from 'material-ui/styles/colors';


export default ({ order }) => {
// Remove once LineItems return with order
order.lineItems = [
  { id: 1, quantity: 1, price: 122.2, product: { name: 'Product 1', images: ['https://dummyimage.com/320x150/ddd/fff.jpg&text=1'] }},
  { id: 2, quantity: 3, price: 928, product: { name: 'Product 2', images: ['https://dummyimage.com/320x150/ddd/fff.jpg&text=2'] }},
  { id: 3, quantity: 4, price: 23.03, product: { name: 'Product 3', images: ['https://dummyimage.com/320x150/ddd/fff.jpg&text=3'] }}
]
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  return (
    <div id="order-list" className="col-xs-12">
      <p>Thank you for your order! A confirmation email should be arriving to your inbox shortly.</p>
      <p className="confirmation-num">{`Confirmation Number: #${order.confirmation_number}`}</p>
      <ProductList lineItems={order.lineItems} />
      <Link to="/products">
        <RaisedButton
          label="Keep Shopping"
          backgroundColor={green500}
          style={{marginTop: '1em'}}
          labelStyle={{color: white}}
        />
      </Link>
    </div>
  )
};
