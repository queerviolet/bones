import React from'react';
import { connect } from 'react-redux';
import OrderHistory from './OrderHistory';
import { fetchOrders } from '../../redux/order'

const mapStateToProps = ({ orders }) => ({ orders });

// const mapDispatchToProps = dispatch => {
//     return {
//         getOrders: dispatch(fetchOrders())
//     }
// }

export default connect(mapStateToProps)(OrderHistory);