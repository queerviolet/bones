import React from'react';
import { connect } from 'react-redux';
import Reviews from './Reviews';

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Reviews);
