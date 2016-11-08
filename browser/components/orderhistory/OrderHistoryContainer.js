import React from'react';
import { connect } from 'react-redux';
import OrderHistory from './OrderHistory';

const mapStateToProps = ({ orders }) => ({ orders });

export default connect(mapStateToProps)(OrderHistory);
