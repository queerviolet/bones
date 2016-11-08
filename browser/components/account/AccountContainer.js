'use strict';

import { connect } from 'react-redux';
import Account from './Account';

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(
  mapStateToProps
)(Account);
