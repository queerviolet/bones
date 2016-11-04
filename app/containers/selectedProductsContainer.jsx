'use strict'

import { connect } from 'react-redux';
import selectedProductsComponent from '../components/selectedProductsComponent';

const mapStateToProps = (state, ownProps) => ({
    products: state.products
});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(selectedProductsComponent);