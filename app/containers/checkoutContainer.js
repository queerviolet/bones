import { connect } from 'react-redux';
import CheckoutComponent from '../components/checkoutComponent';

const mapStateToProps = (state, ownProps) => ({
    total: state.total,
    cart: state.cart,
    products: state.products
})
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent);
