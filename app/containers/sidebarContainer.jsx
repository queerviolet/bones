'use strict'

import { connect } from 'react-redux';
import sidebarComponent from '../components/sidebarComponent';
import { receiveCategoryProductsFromServer } from '../actions/productsActions';

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadCategoryProducts: (categoryId) => dispatch(receiveCategoryProductsFromServer(categoryId))
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(sidebarComponent);