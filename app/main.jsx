'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import NavBar from './components/NavBar'

render (
  <Provider store={store}>
    <NavBar />
    <Root/>
  </Provider>,
  document.getElementById('main')
)
