import { connect } from 'react-redux';
import Checkout from './Checkout';
import { checkoutOrderCart } from 'APP/app/reducers/checkout';

const mapStateToProps = ({ checkoutOrderCart }) => ({checkoutOrderCart });

const mapDispatchToProps = (dispatch) => {
  return {
    cartCheckoutOrder: function(userId) {
      dispatch(checkoutOrderCart(userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);