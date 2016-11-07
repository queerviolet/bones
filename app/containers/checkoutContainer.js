import { connect } from 'react-redux';
import CheckoutComponent from '../components/checkoutComponent';


const mapStateToProps = (state, ownProps) => ({
    total: state.total,
    cart: state.cart,
    products: state.products,
    user: state.auth
})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // create a new order in the db.
    // update cart to {} after an order is submitted.
    clearCart: () => {
      return dispatch(clearCart())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent);
