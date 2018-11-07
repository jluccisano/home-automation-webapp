import * as types from '../constants/ActionTypes';
import Api from '../middleware/api';

/* ENABLE / DISABLE */

export function enable() {
  return dispatch => {
    dispatch({type: types.SET_ALARM_PENDING});
    return Api.get('/alarm/enable')
      .then(() => {
        return Promise.resolve();
      })
      .catch(error => {
        dispatch({type: types.SET_ALARM_FAILURE, error: error.message});
        return Promise.reject(error);
      });
  };
}

export function disable() {
  return dispatch => {
    dispatch({type: types.SET_ALARM_PENDING});
    return Api.get('/alarm/disable')
      .then(() => {
        return Promise.resolve();
      })
      .catch(error => {
        dispatch({type: types.SET_ALARM_FAILURE, error: error.message});
        return Promise.reject(error);
      });
  };
}

export function setAlarm(state) {
  if (state === true) {
    return enable();
  }
  return disable();
}
