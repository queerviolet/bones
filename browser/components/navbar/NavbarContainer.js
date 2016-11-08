import React from'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logout } from '../../redux/user'

const mapStateToProps = ({ user }) => ({
  role: !Object.keys(user).length ? 1 : !user.isAdmin ? 2 : 3
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
