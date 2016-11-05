import React from'react';
import { connect } from 'react-redux';
import OrderForm from './OrderForm';

function OrderFormDecorator (OrderForm) {
	return class StatefulOrderForm extends React.Component {
		constructor(props) {
			super(props) 
			this.state = {
				first_name: '', last_name: '', email: '',
        street1: '', street2: '', city: '', state: '', zip: '',
        number: '', card_type: '', expiry_date: '', security_code: ''
			}
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleChange(field, value) {
			let newState = {};
			newState[field] =  value;
			this.setState(newState);
		}

    handleSubmit (evt) {
      evt.preventDefault();
      this.props.submitOrder(this.state);
    }

		render() {
			return (
				<OrderForm
				  handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          {...this.state}
        />
			)
		}
	}
}

const mapDispatchToProps = dispatch => ({
  submitOrder: (data) => console.log('submitting order', data)
});

export default connect(null, mapDispatchToProps)(OrderFormDecorator(OrderForm));
