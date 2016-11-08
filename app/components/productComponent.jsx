'use strict'

import React from 'react';
import axios from 'axios';

/*
The product component will render a single product to the screen
	- This component loads in an item based on a selected product, or linked object
	- The component mount gets the product through param(link) or selection
*/

export default class ProductComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_id: 1,
			title: '',
			numStars: 1,
			description: '',
			product_id: 1,
		}
		this.onHandleSubmitReview = this.onHandleSubmitReview.bind(this);
	}

	onHandleChange(property, event) {
		this.setState({ [property]: event.target.value });
	}

	onHandleSubmitReview(event) {
		event.preventDefault();
		const newReview = this.state;
		this.state.product_id = this.props.currentProduct ? this.props.currentProduct.id : 1;
		this.props.onCreateOneReview(newReview);
		this.props.onLoadProduct(newReview.product_id);
	}


	componentWillMount() {
		const products = this.props.products;
		const productId = this.props.props.params.id;
		if (products && products.length > 0) {
			this.state.currentProduct = products.find(product => product.id === productId)
		} else {
			this.props.onLoadProduct(productId);
		}
	}

	render() {
		const currentProduct = this.props.currentProduct;
		return (

			<div id="product">
				<div className="product-image" >
					<img src={currentProduct.photoUrl} alt="" />
				</div>
				<div className="product-details" >
					<h2>{currentProduct.title}</h2>
					<p>${currentProduct.price}</p>
					{currentProduct.inventoryQty > 0 ? <p> Stock Available </p> : <p> Stock not Available</p>}
				</div>

				<div className="product-description" >
					<p>{currentProduct.description}</p>

					<div id="review-form">
						<form onSubmit={this.onHandleSubmitReview}>
							<div id="rating">
<input name="myrating" type="radio" value="5" /><span>☆</span><input name="myrating" type="radio" value="4" /><span>☆</span><input name="myrating" type="radio" value="3" /><span>☆</span><input name="myrating" type="radio" value="2" /><span>☆</span><input name="myrating" type="radio" value="1" /><span>☆</span>
</div>
							<h1>Your Review:</h1>
							<h1>Title</h1>
							<input type="input" className="review-title"
								onChange={(event) => { this.onHandleChange('title', event) } }></input>
							<textarea rows="10" cols="80"
								onChange={(event) => { this.onHandleChange('description', event) } }>
							</textarea><br />
							<button type="submit">Submit Review</button>
						</form>

					</div>
					{
						this.props.currentProduct.productReviews
						&& this.props.currentProduct.productReviews.map((review, index) => {
							return (
								<div className={`review-${index}`} key={index}>
									<label className="review-title">{review.title}</label>
									<p>{review.numStars}</p>
									<p>{review.description}</p>
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}
