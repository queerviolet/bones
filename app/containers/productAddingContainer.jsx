'use strict'

import { connect } from 'react-redux';
import productAddingComponent from '../components/productAddingComponent';
import { createOneProductToServer } from '../actions/productsActions';

const mapStateToProps = (state, ownProps) => ({})
const mapDispatchToProps = (dispatch, ownProps) => ({
    onCreateOneProduct: product => dispatch(createOneProductToServer(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(productAddingComponent);