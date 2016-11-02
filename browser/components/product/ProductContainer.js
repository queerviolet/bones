import React from'react';
import { connect } from 'react-redux';
import Product from './Product';

const mapStateToProps = ({ currentProduct }) => ({ product: currentProduct });


const mapDispatchtoProps = ({dispatch}) => {
	return {
		buyClick : () => {
			console.log("BUY!")
		}
	}
}

export default connect(mapStateToProps, mapDispatchtoProps)(Product);
