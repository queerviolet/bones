'use strict'

import { connect } from 'react-redux';
import homeHOC from '../higherOrderComponents/homeHOC';
import { receiveAllCategoriesFromServer } from '../actions/categoryActions';
import { receiveAllProductsFromServer } from '../actions/productsActions';
import { receiveCategoryProductsFromServer } from '../actions/productsActions';

const mapStateToProps = (state, ownProps) => ({ })
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadCategories: (categories) => dispatch(receiveAllCategoriesFromServer()),
        onLoadProducts: () => dispatch(receiveAllProductsFromServer())
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(homeHOC);
