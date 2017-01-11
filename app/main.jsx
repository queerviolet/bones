'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import Jokes from './components/Jokes';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';

import AllRocksContainer from './components/rocks/AllRocksContainer';
import App from './components/App.jsx';

import { fetchAllRocks } from './reducers/rocks';

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI /> : <Login />}
      </nav>
      {children}
    </div>
);

const appEnter = () => {
  store.dispatch(fetchAllRocks())
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter = {appEnter}>
        <IndexRoute component={AllRocksContainer} />
        <Route path="/jokes" component={Jokes} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
