'use strict'

import { connect } from 'react-redux';
import homeComponent from '../components/homeComponent';

const mapStateToProps = (state, ownProps) => ({})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
 }

export default connect(mapStateToProps, mapDispatchToProps)(homeComponent);