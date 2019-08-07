// import npm
import axios from 'axios';

import { resetData, storeTokenInReducer } from 'src/store/reducer';

const connectFormMiddleware = store => next => (action) => {
  switch (action.type) {
    case 'SUBMIT_CONNECT_FORM': {
      const { reducer } = store.getState();
      let correctForm = false;

      if (
        reducer.email !== ''
        && reducer.password !== ''
      ) {
        correctForm = true;
      }
      else {
        correctForm = false;
      }
      if (correctForm) {
        const dataToSend = {
          "username": reducer.email,
          "password": reducer.password,
        };
        axios.post('https://api.rate-my-rent.fr/api/login', dataToSend)
          .then((response) => {
            console.log(response.data.token);
            // get token
            const { token } = response.data;
            // store token in reducer and change isConnected to true
            store.dispatch(storeTokenInReducer(token));
            // reset username and password to '' in reducer
            store.dispatch(resetData());
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    }
      break;
    default:
      next(action);
  }
};

export default connectFormMiddleware;
