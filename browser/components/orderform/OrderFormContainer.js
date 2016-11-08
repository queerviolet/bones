import React from'react';
import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { addOrder } from '../../redux/order'
import { checkCreditCard, checkState, checkZipCode, checkExpDate, checkCV } from '../../utils'

// Update the designated field in the state
const addState = (state, curState, field, value, obj) => {
  let newState = state;
  if (obj) {
    let newField = {};
    newField[field] = value;
    if (!newState[obj])
      newState[obj] = {};
    newState[obj] = Object.assign(curState[obj], newField);
  }
  else
    newState[field] = value;
  return newState;
}

const validate = (state) => {
  let errs = {};
  if (!state.email)
    errs = addState(errs, errs, 'email', 'This field is required')
  if (!state.shipping_address.street1)
    errs = addState(errs, errs, 'street1', 'This field is required', 'shipping_address')
  if (!state.shipping_address.city)
    errs = addState(errs, errs, 'city', 'This field is required', 'shipping_address')
  if (!checkState(state.shipping_address.state))
    errs = addState(errs, errs, 'state', 'Invalid state', 'shipping_address')
  if (!checkZipCode(state.shipping_address.zip))
    errs = addState(errs, errs, 'zip', 'Invalid zip code', 'shipping_address')
  if (!state.billing_address.street1)
    errs = addState(errs, errs, 'street1', 'This field is required', 'billing_address')
  if (!state.billing_address.city)
    errs = addState(errs, errs, 'city', 'This field is required', 'billing_address')
  if (!checkState(state.billing_address.state))
    errs = addState(errs, errs, 'state', 'Invalid state', 'billing_address')
  if (!checkZipCode(state.billing_address.zip))
    errs = addState(errs, errs, 'zip', 'Invalid zip code', 'billing_address')
  if (!checkCreditCard(state.credit_card.number))
    errs = addState(errs, errs, 'number', 'Invalid card number', 'credit_card')
  if (!state.credit_card.card_type)
    errs = addState(errs, errs, 'card_type', 'This field is required', 'credit_card')
  if (!checkExpDate(state.credit_card.expiry_date))
    errs = addState(errs, errs, 'expiry_date', 'Invalid expiration date', 'credit_card')
  if (!checkCV(state.credit_card.security_code))
    errs = addState(errs, errs, 'security_code', 'Invalid CV', 'credit_card')
  return errs;
}

function OrderFormDecorator (OrderForm) {
  return class StatefulOrderForm extends React.Component {
    constructor(props) {
      super(props) 
      this.state = {
        first_name: '', last_name: '', email: '',
        shipping_address: { street1: '', street2: '', city: '', state: '', zip: '' },
        billing_address: { street1: '', street2: '', city: '', state: '', zip: '' },
        credit_card: { number: '', card_type: '', expiry_date: '', security_code: ''},
        errors: {}
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field, value, obj) {
      let newState = addState({}, this.state, field, value, obj)
      this.setState(newState);
    }

    handleSubmit (evt) {
      evt.preventDefault();
      let errs = validate(this.state);
      this.setState({ errors: errs })
      if (!Object.keys(errs).length)
        this.props.submitOrder(this.state);
      else
        console.error(errs);
    }

    render() {
      return (
        <OrderForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          { ...this.state }
        />
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  submitOrder: (data) => {
    data.credit_card.number = data.credit_card.number.split('-').join('');
    dispatch(addOrder(data));
  }
});

export default connect(null, mapDispatchToProps)(OrderFormDecorator(OrderForm));
