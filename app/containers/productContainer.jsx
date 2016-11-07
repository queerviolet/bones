'use strict'

import { connect } from 'react-redux';
import productComponent from '../components/productComponent';
import { receiveOneProductFromServer } from '../actions/productsActions';
import {updateCart} from '../actions/cartActions';

const mapStateToProps = (state, ownProps) => ({
    currentProduct: state.currentProduct,
     cart: state.cart
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadProduct: (productId) => dispatch(receiveOneProductFromServer(productId)),
        addToCart: (item, qty) => {
      return dispatch(updateCart(item, qty));
    }
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(productComponent);