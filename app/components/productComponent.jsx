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
		if (products && products.length > 0) {
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
		const product = this.state.currentProduct;
		return (
		
		<div id="product">


    		<div className="product-image" >

    		<img src="http://placehold.it/500x400" alt="" />

    		</div>

    		<div className="product-details" >

    			<h2>{product.title}</h2>
    			<p> Price</p>
    	
    			{product.quantity ? <p> Stock Available </p> : <p> Stock not Available</p> }

    		</div>

    
    		<div className="product-description" >

    			<p>{product.description}</p>
    			{/* Review Component*/}

    		</div>
    	</div>	

		);
	}
}