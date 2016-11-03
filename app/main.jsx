'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import styles from './style/main.css'

import store from './store'
import Container from './components/Container'
import Login from './components/Login'
import ProductsContainer from './components/Products'
import { fetchProducts } from './reducers/products'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRedirect to="/products" />
        <Route 
          path="/products" 
          component={ProductsContainer} 
          onEnter={onProductsEnter()} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)

function onProductsEnter () {
  const thunk = fetchProducts();
  store.dispatch(thunk)
}