import SockJS from 'sockjs-client';
import Config from 'Config';
import webstomp from 'webstomp-client';
import * as types from '../constants/ActionTypes';

const socketMiddleware = () => {
  return store => next => action => {
    const socket = new SockJS(Config.serverSocket);
    const stompClient = webstomp.over(socket);
    switch (action.type) {
      case 'CONNECT':
        stompClient.connect({}, () => {
          stompClient.subscribe('/queue/DHT22', data => {
            store.dispatch({type: types.RECEIVE_DHT22_DATA, data: JSON.parse(data.body)});
          });
        });
        break;

      default:
        return next(action);
    }
  };
};

export default socketMiddleware;
