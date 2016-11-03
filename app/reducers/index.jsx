import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default, 
  products: require('./productsReducer').default,
  categories: require('./categoryReducer').default
})

export default rootReducer
