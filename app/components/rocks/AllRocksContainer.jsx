import { connect } from 'react-redux';
import AllRocks from './AllRocks';

import { addProductToCart } from '../../reducers/cart';

const mapStateToProps = ({ rocks, auth }, { location: { pathname } }) => ({ auth, rocks, pathname });

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (userId, rockId) =>
    dispatch(addProductToCart(userId, rockId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRocks);
