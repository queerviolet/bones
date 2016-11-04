'use strict'

import { connect } from 'react-redux';
import selectedProductsComponent from '../components/selectedProductsComponent';
import { receiveSelectedProductFromServer } from '../actions/productsActions';

const mapStateToProps = (state, ownProps) => ({
  selectedProducts: state.selectedProducts
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoadSelectedProducts: (productId) => dispatch(
     receiveSelectedProductFromServer(productId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(selectedProductsComponent);
