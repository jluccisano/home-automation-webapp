import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {zones} from './sprinklerReducers';
import {auth} from './authReducers';
import {reducer as formReducer} from 'redux-form';

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
  zones,
  auth,
  form: formReducer
});

export default rootReducer;
