import * as types from '../constants/ActionTypes';
import Api from '../middleware/api';

export function authenticate(user) {
  return dispatch => {
    dispatch({type: types.LOGIN_REQUEST});
    return Api.post('/authenticate', user)
      .then(response => {
        dispatch({type: types.LOGIN_SUCCESS, token: response, receivedAt: Date.now()});
        localStorage.setItem('token', response);
        return Promise.resolve();
      })
      .catch(error => {
        dispatch({type: types.LOGIN_FAILURE, error: error.message});
        return Promise.reject(error);
      });
  };
}

export function logout() {
  return dispatch => {
    dispatch({type: types.LOGOUT_REQUEST});
    localStorage.removeItem('token');
    dispatch({type: types.LOGOUT_SUCCESS});
  };
}
