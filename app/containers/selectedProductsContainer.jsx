'use strict'

import { connect } from 'react-redux';
import selectedProductsComponent from '../components/selectedProductsComponent';
import { 
  receiveCategoryProductsFromServer,
  receiveNamedProductsFromServer 
} from '../actions/productsActions';

const mapStateToProps = (state, ownProps) => ({
  selectedProducts: state.selectedProducts
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoadCategoryProducts: categoryId => dispatch(receiveCategoryProductsFromServer(categoryId)),
    onLoadNamedProducts: productName => dispatch(receiveNamedProductsFromServer(productName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(selectedProductsComponent);
