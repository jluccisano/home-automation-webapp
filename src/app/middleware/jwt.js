import jwt from 'jsonwebtoken';

const jwtMiddleware = () => {
  return store => next => action => {
    switch (action.type) {
      case 'STORE_TOKEN':
        const token = action.token;
        localStorage.setItem('token', JSON.stringify(token));
        break;
      case 'CHECK_TOKEN':
        console.log('check token with public key, check if token was produce by the good server');
        jwt.verify(action.token, 'get public key', (err, decoded) => {
          console.log(decoded);
          if (err) {
            /*
             err = {
               name: 'TokenExpiredError',
               message: 'jwt expired',
               expiredAt: 1408621000
             }
           */
          }
        });
        break;
      case 'GET_TOKEN':
        const currentToken = localStorage.getItem("token");
        console.log(currentToken);
        break;
      default:
        return next(action);
    }
  };
};

export default jwtMiddleware;
