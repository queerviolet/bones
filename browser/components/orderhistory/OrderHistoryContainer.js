import React from'react';
import { connect } from 'react-redux';
import OrderHistory from './OrderHistory';
import { fetchOrders } from '../../redux/order';

const mapStateToProps = ({ orders }) => ({ orders });

import { fetchOrders } from '../../redux/order'

const mapStateToProps = ({ orders }) => ({ orders });

export default connect(mapStateToProps)(OrderHistory);