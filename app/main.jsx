'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'


import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import homeContainer from './containers/homeContainer'
import productContainer from './containers/productContainer'
import allProductsContainer from './containers/allproductsContainer'
import selectedProductsContainer from './containers/selectedProductsContainer'
import WhoAmI from './components/WhoAmI'
import cartContainer from './containers/cartContainer';
import receiveAllProductsFromServer from './actions/productsActions';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={homeContainer}>
        <IndexRoute component={allProductsContainer} />
        <Route path="products/:id" component={productContainer} />
        <Route path="products/category/:categoryId" component={selectedProductsContainer} />
        <Route path="cart" component={cartContainer} onEnter={receiveAllProductsFromServer}/>
      </Route>
      <Route path="/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
