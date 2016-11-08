import React from'react';
import { connect } from 'react-redux';
import AddProduct from './AddProduct';
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
	if (!state.name)
		errs = addState(errs, errs, 'name', 'This field is required')
	if (!state.price)
		errs = addState(errs, errs, 'price', 'This field is required')
	if (!state.quantity)
		errs = addState(errs, errs, 'quantity', 'This field is required')
	if (!state.description)
		errs = addState(errs, errs, 'description', 'This field is required')
	if (!state.color)
		errs = addState(errs, errs, 'color', 'This field is required')
	if (!state.material)
		errs = addState(errs, errs, 'material', 'This field is required')
	if (!state.image1)
		errs = addState(errs, errs, 'image1', 'This field is required')
	return errs;
}

function AddProductDecorator (AddProduct) {
	return class StatefulAddProduct extends React.Component {
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
				<AddProduct
				  handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
					cardType={this.state.credit_card.card_type}
					errors={this.state.errors}
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

export default connect(null, mapDispatchToProps)(AddProductDecorator(AddProduct));
