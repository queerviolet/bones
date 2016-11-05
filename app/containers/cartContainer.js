import { connect } from 'react-redux';
import CartComponent from '../components/cartComponent';
import { updateCart, removeItemFromCart } from '../actions/cartActions';

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart,
    products: state.products
})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (itemId, qty) => dispatch(updateCart(itemId, qty)),
    removeFromCart: (itemId) => dispatch(removeItemFromCart(itemId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
