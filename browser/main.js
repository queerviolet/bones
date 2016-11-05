// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'

// React components
import App from './components/App'
import AllProductsContainer from './components/products/AllProductsContainer'
import ProductContainer from './components/product/ProductContainer'
import CartContainer from './components/cart/CartContainer'
import OrderFormContainer from './components/orderform/OrderFormContainer'

// Redux actions and thunks
import store from './store'
import { fetchProducts } from './redux/products'
import { fetchProduct } from './redux/product'
import { fetchCart } from './redux/cart'

const appEnter = () => store.dispatch(fetchProducts());
const productEnter = (nextState) => store.dispatch(fetchProduct(nextState.params.productId));
const orderEnter = (nextState) => store.dispatch(fetchOrder(nextState.params.orderId));
const cartEnter = () => store.dispatch(fetchCart());

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } onEnter={ appEnter }>
        <Route path="/products" component={ AllProductsContainer } />
        <Route path="/products/:productId" component={ ProductContainer } onEnter={ productEnter } />
        <Route path="/cart" component={CartContainer} onEnter={ cartEnter } />
        <Route path="/checkout" component={ OrderFormContainer } />
        <IndexRoute component={ AllProductsContainer } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
