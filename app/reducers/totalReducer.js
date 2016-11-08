'use strict'

import { UPDATE_TOTAL } from '../actions/totalActions';

// Reducer for Categories

export default function totalReducer(prevState = 0, action){
  switch(action.type){
    case UPDATE_TOTAL:
      return action.total;
    default: return prevState;
  }
}
