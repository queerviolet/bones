import React from'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { updateQuantity, removeCartProduct } from '../../redux/cart'

const mapStateToProps = ({ cartProducts }) => ({ cartProducts });

const mapDispatchToProps = dispatch => {
    return {
        handleQuantityChange: (productId, value) => {
            if (!isNaN(value) && value > 0)
                dispatch(updateQuantity(productId, value))
        },
        removeProductFromCart: (productId) => {
            dispatch(removeCartProduct(productId))
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
