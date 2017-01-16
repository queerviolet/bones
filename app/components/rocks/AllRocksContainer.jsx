import { connect } from 'react-redux';
import AllRocks from './AllRocks';

import { addProductToCart } from '../../reducers/cart';

const mapStateToProps = ({ rocks, auth }, { location: { pathname } }) => ({ auth, rocks, pathname });

const mapDispatchToProps = dispatch => ({
  addProductToCart: (quantity, userId, rockId) =>
    dispatch(addProductToCart(quantity, userId, rockId)),
  changeErrorText: quantity => {
    if (quantity < 0) return 'You must enter a valid quantity';
    dispatch(() => ({ type: null }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRocks);
