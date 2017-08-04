import * as types from '../constants/ActionTypes';
import Api from '../middleware/api';

/* ENABLE / DISABLE */
export function setAlarm(state) {
  console.log(state);
  return dispatch => {
    dispatch({type: types.SET_ALARM_PENDING});
    return Api.get('/alarms')
      .then(response => {
        console.log(response);
        return Promise.resolve();
      })
      .catch(error => {
        dispatch({type: types.SET_ALARMFAILURE, error: error.message});
        return Promise.reject(error);
      });
  };
}
