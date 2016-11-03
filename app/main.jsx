'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import styles from './style/main.css'

import store from './store'
import Container from './components/Container'
import Login from './components/Login'
import Review from './components/Review'
import ProductsContainer from './components/Products'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={ProductsContainer} />
        <Route path="/login" component={Login} />
        <Route path="/reviews" component={Review} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
