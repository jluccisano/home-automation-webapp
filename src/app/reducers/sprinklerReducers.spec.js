import {zones} from './sprinklerReducers';
import {FETCH_ALL_ZONE_SUCCESS} from '../constants/ActionTypes';

describe('zones reducer', () => {
  it('should FETCH_ALL_ZONE_SUCCESS', () => {
    expect(
      zones({}, {
        type: FETCH_ALL_ZONE_SUCCESS,
        response: {
          entities: {
            zones: [
              {
                id: 1
              }, {
                id: 2
              }
            ]
          }
        },
        receivedAt: 1501753518525
      })
    ).toEqual({
      isFetching: false,
      items: [
        {
          id: 1
        }, {
          id: 2
        }
      ],
      lastUpdated: 1501753518525
    });
  });
});
