import React from 'react'
import { RaisedButton } from 'material-ui'
import {green500} from 'material-ui/styles/colors';
import Reviews from '../Reviews'
import { formatPrice, getAvgRating, getStars } from '../../utils'

export default ({ product, buyClick }) => {

	if(!Object.keys(product).length) {
		return null
	}

	const avgRating = product.reviews.length ? getAvgRating(product.reviews) : 0;
  return (

    <div id="product" className="col-xs-12">
    	<div className="row">
    		<div className="product-image col-xs-12 col-sm-8" >

    		<img src={product.images[0]} alt="" />

    		</div>

    		<div className="product-details col-xs-12 col-sm-4" >

    			<h2>{product.name}</h2>
    			<p>{ formatPrice(product.price) }</p>
    			{
						avgRating ? getStars(avgRating) : null
					}
    			{product.quantity ? <p> In-Stock </p> : <p> Out Of Stock </p> }
    			<RaisedButton onClick={() => buyClick(product.id)} label='Buy' backgroundColor={green500}/>

    		</div>

    	</div>

    	<div className="row">
    		<div className="product-description col-xs-12" >
    			<p>{product.description}</p>
    		</div>
    	</div>

    	<div className="row">
    		<Reviews reviews={product.reviews} avgRating={avgRating} />
    	</div>





    </div>

  	)
  };
