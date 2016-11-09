import React from'react';
import { connect } from 'react-redux';
import AddProduct from './AddProduct';
import { addProduct } from '../../redux/products'

const initialState = {
	name: '', price: '', description: '', quantity: '',
	color: '', material: '', type: '', style: '', category: '',
	images: '', open: false, errors: {}
}

function AddProductDecorator (AddProduct) {
	return class StatefulAddProduct extends React.Component {
		constructor(props) {
			super(props) 
			this.state = initialState;
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleChange(field, value) {
      let newState = {};
      newState[field] = value;
      if (this.state.errors[field]) {
        let newErrs = this.state.errors;
        delete newErrs[field]
        newState.errors = newErrs;
      }
      this.setState(newState);
    }

		validate() {
      let errs = {};
      if (!this.state.name) errs.name = 'This field is required';
      if (!this.state.price) errs.price = 'This field is required';
      if (!this.state.description) errs.description = 'This field is required';
      if (!this.state.quantity) errs.quantity = 'This field is required';
      if (!this.state.category) errs.category = 'This field is required';
      if (!this.state.images) errs.images = 'At least one image is required';
      return errs;
    }

    handleSubmit (evt) {
      evt.preventDefault();
      const errs = this.validate();
      this.setState({ errors: errs })
      if (!Object.keys(errs).length) {
        this.props.addProduct(this.state, (err) => {
          let newState = err ?
            { errors: { submit: 'Error adding the product, please try again later' } } :
            initialState;
          this.setState(newState);
        });
      }
      else
        console.error(errs);
    }

		render() {
			return (
				<AddProduct
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					{ ...this.state }
        />
			)
		}
	}
}

const mapDispatchToProps = dispatch => ({
  addProduct: (data, cb) => {
		data.images = data.images.split(',').map(img => img.trim());
		dispatch(addProduct(data, cb));
	}
});

export default connect(null, mapDispatchToProps)(AddProductDecorator(AddProduct));
