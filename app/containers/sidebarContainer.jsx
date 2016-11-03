'use strict'

import { connect } from 'react-redux';
import sidebarComponent from '../components/sidebarComponent';

const mapStateToProps = (state, ownProps) => ({})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
 }

export default connect(mapStateToProps, mapDispatchToProps)(sidebarComponent);