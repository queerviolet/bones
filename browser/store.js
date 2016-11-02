import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// Setup Redux middleware based on env
const middleware = [ thunkMiddleware ];
// if (window && window.location.host.slice(0, 9) === 'localhost')
  middleware.push(createLogger());

export default createStore(
  rootReducer,
  applyMiddleware(...middleware)
);
