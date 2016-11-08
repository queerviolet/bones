import React from'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logout } from '../../redux/user'

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
