'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import Login from './components/Login'
import Review from './components/Review'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} />
      <Route path="/login" component={Login} />
      <Route path="/reviews" component={Review} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
