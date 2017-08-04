import {
  FETCH_ALL_ZONE_PENDING,
  FETCH_ALL_ZONE_SUCCESS
} from '../constants/ActionTypes';

export const zones = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case FETCH_ALL_ZONE_PENDING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_ALL_ZONE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.response.entities.zones,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};
