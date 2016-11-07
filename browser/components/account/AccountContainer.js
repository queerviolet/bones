'use strict';

import { connect } from 'react-redux';
import Account from './Account';

const mapStateToProps = ({ account }) => ({
  account
});

export default connect(
  mapStateToProps
)(Account);
