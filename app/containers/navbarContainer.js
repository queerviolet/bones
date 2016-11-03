'use strict'

import { connect } from 'react-redux';
import navbarComponent from '../components/navbarComponent';

const mapStateToProps = (state, ownProps) => ({
    categories: state.categories
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
 }

export default connect(mapStateToProps, mapDispatchToProps)(navbarComponent);
