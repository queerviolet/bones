'use strict'

import { connect } from 'react-redux';
import homeHOC from '../higherOrderComponents/homeHOC';
import { receiveAllCategoriesFromServer } from '../actions/categoryActions';
import { receiveAllProductsFromServer } from '../actions/productActions';

const mapStateToProps = (state, ownProps) => ({ })
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadCategories: (categories) => dispatch(receiveAllCategoriesFromServer()),
        onLoadProducts: (products) => dispatch(
           receiveAllProductsFromServer())
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(homeHOC);
