'use strict'

import { connect } from 'react-redux';
import selectedProductsComponent from '../components/selectedProductsComponent';
import { 
  receiveCategoryProductsFromServer,
  receiveNamedProductsFromServer 
} from '../actions/productsActions';
import {updateCart} from '../actions/cartActions';


const mapStateToProps = (state, ownProps) => ({
  selectedProducts: state.selectedProducts,
  cart: state.cart
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoadCategoryProducts: categoryId => dispatch(receiveCategoryProductsFromServer(categoryId)),
    onLoadNamedProducts: productName => dispatch(receiveNamedProductsFromServer(productName)),
    addToCart: (item, qty) => {
      return dispatch(updateCart(item, qty));
    }  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(selectedProductsComponent);
