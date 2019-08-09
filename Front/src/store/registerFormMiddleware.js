// import npm
import axios from 'axios';

import { resetData } from 'src/store/reducer';

const registerFormMiddleware = store => next => (action) => {
  switch (action.type) {
    case 'SUBMIT_REGISTER_FORM': {
      const { reducer } = store.getState();
      let correctForm = false;

      if (
        reducer.firstName !== ''
        && reducer.lastName !== ''
        && reducer.email !== ''
        && reducer.password !== ''
      ) {
        correctForm = true;
      }
      else {
        correctForm = false;
      }
      if (correctForm) {
        const dataToSend = {
          "surname": reducer.firstName,
          "name": reducer.lastName,
          "username": reducer.email,
          "email": reducer.email,
          "password": reducer.password,
        };
        axios.post('https://api.rate-my-rent.fr/api/register', dataToSend)
          .then((response) => {
            store.dispatch(resetData());
            next(action);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
      break;
    default:
      next(action);
  }
};

export default registerFormMiddleware;
