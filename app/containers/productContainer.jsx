'use strict'

import { connect } from 'react-redux';
import productComponent from '../components/productComponent';
import { receiveOneProductFromServer } from '../actions/productsActions';

const mapStateToProps = (state, ownProps) => ({
    currentProduct: state.currentProduct
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadProduct: (productId) => dispatch(receiveOneProductFromServer(productId))
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(productComponent);