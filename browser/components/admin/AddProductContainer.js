import React from'react';
import { connect } from 'react-redux';
import AddProduct from './AddProduct';
import { addProduct } from '../../redux/addproduct'
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
	// if (!state.type)
	// 	errs = addState(errs, errs, 'type', 'This field is required')
	// if (!state.style)
	// 	errs = addState(errs, errs, 'style', 'This field is required')
	// if (!state.category)
	// 	errs = addState(errs, errs, 'category', 'This field is required')
	return errs;
}

function AddProductDecorator (AddProduct) {
	return class StatefulAddProduct extends React.Component {
		constructor(props) {
			super(props) 
			this.state = {
				name: '',
				price: '',
				quantity: '',
				description: '',
				color: '',
				material: '',
				image1: '',
				image2: '',
				image3: '',
				type: '',
				style: '',
				category: '',
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
      		this.props.submitProduct(this.state);
			else
				console.error(errs);
    }

		render() {
			return (
				<AddProduct
				  	handleChange={this.handleChange}
          			handleSubmit={this.handleSubmit}
					type={this.state.type}
					style={this.state.style}
					category={this.state.category}
					errors={this.state.errors}
        />
			)
		}
	}
}

const mapDispatchToProps = dispatch => ({
  submitProduct: (data) => {
	  	console.log(data)
		dispatch(addProduct(data));
	}
});

export default connect(null, mapDispatchToProps)(AddProductDecorator(AddProduct));
