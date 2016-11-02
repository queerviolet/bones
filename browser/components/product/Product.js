import React from'react';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui'

export default ({ product, buyClick }) => {

	if(!Object.keys(product).length) {
		return null
	}

  return (

    <div id="product" className="col-xs-12">
    	<div className="row">
    		<div className="product-image col-xs-12 col-sm-8" >

    		<img src="http://placehold.it/550x400" alt="" />

    		</div>

    		<div className="product-details col-xs-12 col-sm-4" >

    			<h2>NAME</h2>
    			<p> $$$$ </p>
    			<p> ***** </p>
    			{product.quantity ? <p> In-Stock </p> : <p> Out Of Stock </p> }
    			<RaisedButton onClick={buyClick} label='Buy'/>

    		</div>

    	</div>

    	<div className="row">
    		<div className="product-description col-xs-12" >

    			<p>DESCRIPTION</p>

    		</div>

    	</div>

    	<div className="row">
    		
    		{/* Review Component*/}

    	</div>





    </div>

  	)
  };
