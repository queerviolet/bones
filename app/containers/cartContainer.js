import { connect } from 'react-redux';
import CartComponent from '../components/cartComponent';
import { updateCart, removeItemFromCart } from '../actions/cartActions';
import { updateTotal } from '../actions/totalActions';

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart,
    products: state.products,
})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (itemId, qty) => dispatch(updateCart(itemId, qty)),
    removeFromCart: (itemId) => dispatch(removeItemFromCart(itemId)),
    updateTotal: (total) => dispatch(updateTotal(total))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
