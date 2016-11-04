import { connect } from 'react-redux';
import cartComponent from '../components/cartComponent';

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart,
    products: state.products
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
 }

export default connect(mapStateToProps, mapDispatchToProps)(cartComponent);
