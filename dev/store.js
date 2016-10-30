const {createStore, combineReducers} = require('redux')
  , Immutable = require('immutable')

const store = createStore((state=Immutable.Map(), action) => {
  switch (action.type) {
  case 'COMPILE_OK':
    return state.set('stats', action.stats).delete('error')
  case 'COMPILE_FAIL':
    return state.delete('stats').set('error', action.error)
  default:
    return state
  }  
})

module.exports = store