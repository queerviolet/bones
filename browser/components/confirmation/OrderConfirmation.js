import React from 'react';
import { Link } from 'react-router';
import LineItemsList from '../products/LineItemsList'
import { RaisedButton } from 'material-ui';


export default ({ order }) => {
  return (
    <div id="order-list" className="col-xs-12">
      <p>Thank you for your order! A confirmation email should be arriving to your inbox shortly.</p>
      <p className="confirmation-num">{`Confirmation Number: #${order.confirmation_number}`}</p>
      <LineItemsList lineItems={order.lineItems} />
      <Link to="/products">
        <RaisedButton
          label="Keep Shopping"
          backgroundColor="#2b4b91"
          style={{marginTop: '1em'}}
          labelStyle={{color: 'white'}}
        />
      </Link>
    </div>
  )
};
