import { connect } from 'react-redux';
import Cart from './Cart';
import { addProductToCart, removeCartProduct } from 'APP/app/reducers/cart';

const mapStateToProps = ({cartProducts, auth}) => ({cartProducts, auth});

const mapDispatchToProps = (dispatch) => {
  return {
    cartAddProduct: function(quantity, userId, rockId) {
      dispatch(addProductToCart(quantity, userId, rockId));
    },
    cartRemoveProduct: function(userId, rockId) {
      dispatch(removeCartProduct(userId, rockId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
