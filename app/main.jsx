'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import Jokes from './components/Jokes';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';

import UserInfoContainer from './components/users/UserInfoContainer';
import AllRocksContainer from './components/rocks/AllRocksContainer';
import RockContainer from './components/rock/RockContainer';
import App from './components/App.jsx';

import { fetchUserInfo } from './reducers/userInfoReducer';
import { fetchAllRocks } from './reducers/rocks';
import { fetchARock } from './reducers/rock';

injectTapEventPlugin();

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
  store.dispatch(fetchAllRocks());
};

const rockEnter = (nextRouterState) => {
  const rockId = nextRouterState.params.id;
  store.dispatch(fetchARock(rockId));
};

const userSignedIn = (nextRouterState) => {
  const userId = nextRouterState.params.id;
  store.dispatch(fetchUserInfo(userId));
};

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter = {appEnter}>
          <IndexRoute component={AllRocksContainer} />
          <Route path="/jokes" component={Jokes} />
          <Route path="/rocks/:id" component={RockContainer} onEnter={rockEnter} />
          <Route path="/users/:id" component={UserInfoContainer} onEnter={userSignedIn} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
);
