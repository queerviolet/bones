import React from'react';
import { connect } from 'react-redux';
import AllProducts from './AllProducts';

const mapStateToProps = ({ products }) => ({ products });


function ProductsDecorator (AllProducts) {
	return class StatefulProducts extends React.Component {
		constructor(props) {
			super(props) 
			this.state = {
				searchText: "",
				category: 'all'
			}
			this.handleChange = this.handleChange.bind(this);
		}

		handleChange(field, value) {
			let newState = {};
			newState[field] =  value;
			this.setState(newState);	
		}

		render() {
			// Filter products by search string and selected category
			const products = this.props.products.filter((product) => {
				return product.name.toLowerCase()
					.indexOf(this.state.searchText.toLowerCase()) !== -1 &&
					(
						this.state.category === 'all' ||
						this.state.category === product.category
					);
			})

			return (
				<AllProducts
				searchText={this.state.searchText}
				category={this.state.category}
				products={products}
				handleChange={this.handleChange}/>
			)
		}
	}
}

export default connect(mapStateToProps)(ProductsDecorator(AllProducts));
