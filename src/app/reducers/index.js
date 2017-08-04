import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {zones} from './sprinklerReducers';

const errorMessage = (state = null, action) => {
  const {error} = action;
  if (error) {
    return error;
  }
  return state;
};

const rootReducer = combineReducers({
  errorMessage,
  routing: routerReducer,
  zones
});

export default rootReducer;
