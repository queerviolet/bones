import { connect } from 'react-redux';

import UserInfoComponent from './UserInfo';
import {
  handleExpand,
  handleToggle,
  handleReduce,
  handleExpandChange
} from '../../reducers/userInfoReducer';

const mapStateToProps = ({ userInfo }) => ({ userInfo });

const mapDispatchToProps = (dispatch) => ({
  handleExpand: () =>
    dispatch(handleExpand()),
  handleToggle: () =>
    dispatch(handleToggle()),
  handleReduce: () =>
    dispatch(handleReduce()),
  handleExpandChange: () =>
    dispatch(handleExpandChange())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoComponent);
