'use strict'

import React from 'react';

export default class ProductComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {currentProduct: {}};
	}

	componentWillMount () {
		console.log('componentWillMount');
		const products = this.props.products;
		const productId = this.params.id;
		if(products.length > 0){
			this.state.currentProduct = products.find(product => product.id === productId)
		} else {
			console.log('hey!');
			axois.get(`api/products/${productId}`)
				.then(product => this.state.currentProduct = product)
				.catch(err => console.log('Error when fetching a product', err))
		}
	}

	render () {
		console.log('printing!');
		return (
			<div className='product-container'>
				{
					this.state.currentProduct.title 
				}
			</div>
		);
	}
}