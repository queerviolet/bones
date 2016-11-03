'use strict'

import { connect } from 'react-redux';
import homeHOC from '../higherOrderComponents/homeHOC';
import { receiveAllCategoriesFromServer } from '../actions/categoryActions';

const mapStateToProps = (state, ownProps) => ({ })
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadCategories: (categories) => dispatch(receiveAllCategoriesFromServer())
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(homeHOC);