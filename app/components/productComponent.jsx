'use strict'

import React from 'react';
import axios from 'axios';

export default class ProductComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const products = this.props.products;
		const productId = this.props.props.params.id;
		if (products && products.length > 0) {
			this.state.currentProduct = products.find(product => product.id === productId)
		} else {
			//this.props.onLoadProduct(productId);
		}
	}

	render() {
		const currentProduct = this.props.currentProduct;
		console.log(currentProduct);
		return (

  		<div id="product">
    		<div className="product-image" >
    		  <img src={currentProduct.photoUrl} alt="" />
    		</div>
    		<div className="product-details" >
    			<h2>{currentProduct.title}</h2>
    			<p>${currentProduct.price}</p>
    			 {currentProduct.inventoryQty>0 ? <p> Stock Available </p> : <p> Stock not Available</p>}
    		</div>

    		<div className="product-description" >
    			<p>{currentProduct.description}</p>
    			{/*       Review Component      */}
    		</div>
      </div>
		);
	}
}
