import { connect } from 'react-redux';
import cartComponent from '../components/cartComponent';
import updateCart from '../actions/cartActions';

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart,
    products: state.products
})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (item, qty) => {
      return dispatch(updateCart(item, qty));
    }
  };
 }

export default connect(mapStateToProps, mapDispatchToProps)(cartComponent);
