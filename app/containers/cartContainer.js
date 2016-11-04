import { connect } from 'react-redux';
import cartComponent from '../components/cartComponent';

const mapStateToProps = (state, ownProps) => ({
    cart: state.cart
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
 }

export default connect(mapStateToProps, mapDispatchToProps)(cartComponent);
