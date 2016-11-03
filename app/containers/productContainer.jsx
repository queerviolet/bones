'use strict'

import { connect } from 'react-redux';
import productComponent from '../components/productComponent';

const mapStateToProps = (state, ownProps) => ({
    products: state.products
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
 }

export default connect(mapStateToProps, mapDispatchToProps)(productComponent);