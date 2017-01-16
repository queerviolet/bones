import { connect } from 'react-redux';

import Navbar from './Navbar';


const mapStateToProps = ({ auth, userInfo }) => ({ auth, userInfo });

// const mapDispatchToProps = dispatch => ({
//   search: searchText =>
//     dispatch(searchForRock(searchText))
// });

export default connect(
  mapStateToProps
)(Navbar);
