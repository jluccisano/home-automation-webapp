import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Config from 'Config';
import * as types from '../constants/ActionTypes';

const socketMiddleware = () => {
  const socket = new SockJS(Config.serverSocket);
  const stompClient = Stomp.over(socket);
  return store => next => action => {
    switch (action.type) {
      case 'CONNECT':
        stompClient.connect({}, frame => {
          console.log(`connected, ${frame}!`);
          stompClient.subscribe('/queue/DHT22', data => {
            console.log(JSON.parse(data.body));
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
