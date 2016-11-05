import React from'react';
import { connect } from 'react-redux';
import OrderConfirmation from './OrderConfirmation';

const mapStateToProps = ({ order }) => ({ order });

export default connect(mapStateToProps)(OrderConfirmation);
