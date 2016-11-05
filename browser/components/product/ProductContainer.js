import React from'react';
import { connect } from 'react-redux';
import Product from './Product';
import { addToCart } from '../../redux/cart'

const mapStateToProps = ({ currentProduct }) => ({ product: currentProduct });

const mapDispatchtoProps = (dispatch) => {
	return {
		buyClick : (productId) => {
			dispatch(addToCart(productId));
		}
	}
}
// TODO: Add local state so we can loop through product images

export default connect(mapStateToProps, mapDispatchtoProps)(Product);
