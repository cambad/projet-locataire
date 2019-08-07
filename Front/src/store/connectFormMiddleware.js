// import npm
import axios from 'axios';

// import local
import { resetData, changeIsConnected } from 'src/store/reducer';
import AuthenticationMethods from 'src/components/AuthenticationMethods';

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
            // get token
            const { token } = response.data;

            // store the token in window.localStorage
            const authenticationObject = new AuthenticationMethods();
            authenticationObject.setToken(token);
            console.log('token du middleware : ', authenticationObject.getToken());

            // set isConnected to reload rendering
            store.dispatch(changeIsConnected());

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
