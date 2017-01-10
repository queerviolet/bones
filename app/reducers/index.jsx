import { combineReducers } from 'redux';
import rocks from './rocks';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  rocks
});

export default rootReducer;
