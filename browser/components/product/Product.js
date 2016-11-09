import React from 'react'
import { RaisedButton } from 'material-ui'
import {green500} from 'material-ui/styles/colors';
import ReviewsContainer from '../reviews/ReviewsContainer'
import { formatPrice, getAvgRating, getStars } from '../../utils'

export default ({ product, buyClick }) => {

	if(!Object.keys(product).length) {
		return null
	}
	const avgRating = product.reviews && product.reviews.length ? getAvgRating(product.reviews) : 0;

  return (
	<div id="product" className="col-xs-12">
		<div className="row">
			<div className="product-image col-xs-12 col-sm-7" >
				<img src={product.images[0]} alt="" />
			</div>
			<div className="product-details col-xs-12 col-sm-5">
				<h3>{product.name} <small style={{margin: "2px 0 0 0"}}>{ product.quantity ? <p>In-Stock</p> : <p>Out Of Stock</p> }</small></h3>
				
				<hr/>

				<div className="row">
					<div className="col-xs-6">{ avgRating ? getStars(avgRating) : null }</div>
					<div className="col-xs-6"><a href="#reviews" className="font1p3">{ product.reviews.length } reviews</a></div>
				</div>

				<hr/>
				
				<div className="row">
					<div className="col-xs-6">
						<div id="price">{ formatPrice(product.price) }</div>
					</div>
					<div className="col-xs-6">
						<RaisedButton onClick={() => buyClick(product.id)} label='Add To Cart' backgroundColor="#2b4b91" labelStyle={{color: '#fff'}}/>
					</div>
				</div>
			</div>
		</div>


		<div className="row">
			<hr/>
			<h3>Product Description</h3>
			<div className="product-description col-xs-12" >
				<ul>
				{product.description.split('-').slice(1).map((str, i) => {
					return (
						<li key={i}>{str}</li>
						)
				})}
				</ul>
			</div>
		</div>

		<div className="row" id="reviews">
			<hr/>
			<ReviewsContainer
					avgRating={avgRating}
				/>
		</div>
	</div>
	)
  };
