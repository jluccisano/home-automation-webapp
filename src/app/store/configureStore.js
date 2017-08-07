import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import socketMiddleware from '../middleware/socket';

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware,
    socketMiddleware,
    createLogger(),
    routerMiddleware(browserHistory)
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
