import React from'react';
import { connect } from 'react-redux';
import ProductsList from './ProductsList';

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchtoProps = dispatch => {
	return {
		deleteProduct : (productId) => {
      console.log(productId)
			//dispatch(addToCart(productId));
		}
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(ProductsList);
