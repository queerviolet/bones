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
		console.log(currentProduct);
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

					<div className="review-form">
						<form>
							<input className="star star-1" id="star-1" type="radio" name="star1" value="1" onChange={(e) => this.updateStar(e)} />
							<label className="star star-1" htmlFor="star-1"></label>
							<input className="star star-2" id="star-2" type="radio" name="star2" value="2" onChange={(e) => this.updateStar(e)} />
							<label className="star star-2" htmlFor="star-2"></label>
							<input className="star star-3" id="star-3" type="radio" name="star3" value="3" onChange={(e) => this.updateStar(e)} />
							<label className="star star-3" htmlFor="star-3"></label>
							<input className="star star-4" id="star-4" type="radio" name="star4" value="4" onChange={(e) => this.updateStar(e)} />
							<label className="star star-4" htmlFor="star-4"></label>
							<input className="star star-5" id="star-5" type="radio" name="star5" value="5" onChange={(e) => this.updateStar(e)} />
							<label className="star star-5" htmlFor="star-5"></label> <br />
							<label>Your Review:</label><br />
							<br />
							<textarea rows="8" cols="100" onChange={(e) => this.updateText(e)}></textarea><br />
							<button type="submit" onClick={(e) => {
								e.preventDefault()
								this.addReview(this.state)
							} }
								>Submit Review
        		</button>
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
