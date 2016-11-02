import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default, 
  products: require('./productReducer').default,
  categories: require('./categoryReducer').default
})

export default rootReducer
