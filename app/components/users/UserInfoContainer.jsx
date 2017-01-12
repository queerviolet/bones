import { connect } from 'react-redux';

import UserInfoComponent from './UserInfo';

const mapStateToProps = ({ userInfo }) => ({ userInfo });

export default connect(mapStateToProps)(UserInfoComponent);
