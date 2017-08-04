import * as types from '../constants/ActionTypes';
import Api from '../middleware/api';
import {Schemas} from '../../schema';
import {normalize} from 'normalizr';

/* POLLING */

export function startPolling() {
  return dispatch => {
    dispatch(fetchAllZone()).then(() => {
      setTimeout(() => dispatch(startPolling()), 2000);
    });
  };
}

/* FETCH */

export function fetchAllZone() {
  return dispatch => {
    dispatch({type: types.FETCH_ALL_ZONE_PENDING});
    return Api.get('/zones')
      .then(response => {
        console.log(response.zones);
        dispatch({
          type: types.FETCH_ALL_ZONE_SUCCESS,
          response: normalize(response.zones, Schemas.ZONE_ARRAY),
          receivedAt: Date.now()
        });
        return Promise.resolve();
      })
      .catch(error => {
        dispatch({type: types.FETCH_ALL_ZONE_FAILURE, error: error.message});
        return Promise.reject(error);
      });
  };
}

/* SET */

export function setZone(zone) {
  return dispatch => {
    dispatch({type: types.SET_ZONE_PENDING});
    return Api.post('/zones', zone)
      .then(() => {
        dispatch({
          type: types.SET_ZONE_SUCCESS,
          receivedAt: Date.now()
        });
        return Promise.resolve();
      })
      .catch(error => {
        dispatch({type: types.SET_ZONE_FAILURE, error: error.message});
        return Promise.reject(error);
      });
  };
}
