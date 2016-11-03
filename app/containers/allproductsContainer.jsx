'use strict'

import { connect } from 'react-redux';
import allProductsComponent from '../components/allProductsComponent';

const mapStateToProps = (state, ownProps) => ({
    products: state.products
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
 }

export default connect(mapStateToProps, mapDispatchToProps)(allProductsComponent);
