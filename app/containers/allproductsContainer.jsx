'use strict'

import { connect } from 'react-redux';
import allProductsComponent from '../components/allProductsComponent';
import {updateCart} from '../actions/cartActions';

const mapStateToProps = (state, ownProps) => ({
  products: state.products,
  cart: state.cart
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (item, qty) => {
      return dispatch(updateCart(item, qty));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(allProductsComponent);
