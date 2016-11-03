'use strict'

import React from 'react';
import axios from 'axios';

export default class ProductComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentProduct: {} };
	}

	componentWillMount() {
		const products = this.props.products;
		const productId = this.props.props.params.id;
		if (products.length > 0) {
			this.state.currentProduct = products.find(product => product.id === productId)
		} else {
			axios.get(`/api/product/${productId}`)
				.then(product => {
					this.setState({ currentProduct: product.data });
				})
				.catch(err => console.log('Error when fetching a product', err))
		}
	}

	render() {
		return (
			<div className='product-container'>
				<ul>
					<li>{this.state.currentProduct.title}</li>
					<li>{this.state.currentProduct.description}</li>
				</ul>
			</div>
		);
	}
}