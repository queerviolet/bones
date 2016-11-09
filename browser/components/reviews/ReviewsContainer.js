import React from'react';
import { connect } from 'react-redux';
import Reviews from './Reviews';

const mapStateToProps = ({ user, currentProduct }) => ({ 
  user,
  reviews: currentProduct.reviews ? currentProduct.reviews : [],
  productId: currentProduct.id
});

export default connect(mapStateToProps)(Reviews);
