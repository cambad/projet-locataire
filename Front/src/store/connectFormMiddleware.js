// import npm
import axios from 'axios';

const connectFormMiddleware = store => next => (action) => {
  switch (action.type) {
    case 'SUBMIT_CONNECT_FORM': {
      const dataToSend = {
        "username": "Maïté",
        "password": "boeufbourguignon",
      };
      axios.post('https://api.rate-my-rent.fr/api/login', dataToSend)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
      break;
    default:
      next(action);
  }
};

export default connectFormMiddleware;
