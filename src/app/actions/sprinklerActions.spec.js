import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './sprinklerActions';
import * as types from '../constants/ActionTypes';
import nock from 'nock';
import jest from 'jest';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Sprinkler Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_ALL_ZONE_SUCCESS when fetching zones has been done', () => {
    nock('http://10.193.31.156:5000')
      .get('/zones')
      .reply(200, {response: {zones: [
        {
          id: 1
        }, {
          id: 2
        }
      ]}});

    const expectedActions = [
      {type: types.FETCH_ALL_ZONE_PENDING},
      {type: types.FETCH_ALL_ZONE_SUCCESS, response: {zones: [
        {
          id: 1
        }, {
          id: 2
        }
      ]}}
    ];
    const store = mockStore({zones: {}});

    return store.dispatch(actions.fetchAllZone()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
