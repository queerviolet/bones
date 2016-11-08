// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// React components
import App from './components/App'
import AllProductsContainer from './components/products/AllProductsContainer'
import ProductContainer from './components/product/ProductContainer'
import CartContainer from './components/cart/CartContainer'
import OrderFormContainer from './components/orderform/OrderFormContainer'
import OrderConfirmationContainer from './components/confirmation/OrderConfirmationContainer'
import OrderHistoryContainer from './components/orderhistory/OrderHistoryContainer'
import AccountContainer from './components/account/AccountContainer';
import AccountDetails from './components/account/AccountDetails'
import SignInContainer from './components/signin/SignInContainer';
import AddProductContainer from './components/admin/AddProductContainer';

// Redux actions and thunks
import store from './store'
import { fetchProducts } from './redux/products'
import { fetchProduct } from './redux/product'
import { fetchOrder } from './redux/order'
import { fetchCart } from './redux/cart'
import { fetchOrders } from './redux/orderhistory'
import { retrieveLoggedInUser } from './redux/user'

const appEnter = () => {
  store.dispatch(fetchProducts())
  store.dispatch(retrieveLoggedInUser());
};
const productEnter = (nextState) => store.dispatch(fetchProduct(nextState.params.productId));
const cartEnter = () => store.dispatch(fetchCart());
const confirmationEnter = (nextState) => store.dispatch(fetchOrder(nextState.params.orderId));
const userOrdersEnter = () => {
  let userId = store.getState().user.id;
  if (userId) store.dispatch(fetchOrders(userId));
};
const adminOrdersEnter = () => store.dispatch(fetchOrders());

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } onEnter={ appEnter }>
        <Route path="/products" component={ AllProductsContainer } />
        <Route path="/products/:productId" component={ ProductContainer } onEnter={ productEnter } />
        <Route path="/cart" component={CartContainer} onEnter={ cartEnter } />
        <Route path="/checkout" component={ OrderFormContainer } />
        <Route path="/confirmation/:orderId" component={ OrderConfirmationContainer } onEnter={ confirmationEnter } />
        <Route path="/sign-in" component={SignInContainer} />
        <Route path="/account" component={AccountContainer} >
          <Route path="details" component={ AccountDetails }/>
          <Route path="orders" component={ OrderHistoryContainer } onEnter={ userOrdersEnter }/>
          <IndexRedirect to="details" />
        </Route>
        <Route path="/admin" component={AccountContainer} >
          <Route path="orders" component={ OrderHistoryContainer } onEnter={ adminOrdersEnter }/>
          <Route path="products" />
          <IndexRedirect to="orders" />
        </Route>
        <Route path="/addproduct" component={AddProductContainer} />
        <IndexRoute component={ AllProductsContainer } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
