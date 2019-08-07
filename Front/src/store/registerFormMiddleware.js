// import npm
import axios from 'axios';

const registerFormMiddleware = store => next => (action) => {
  switch (action.type) {
    case 'SUBMIT_REGISTER_FORM': {
      const dataToSend = {
        "surname": "Jean-Marie",
        "name": "Bigard",
        "username": "JMB",
        "age": 65,
        "email": "jmbigard@bibi.com",
        "password": "coucoualex"
      };
      axios.post('https://api.rate-my-rent.fr/api/register', dataToSend)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error)
        })
    }
      break;
    default:
      next(action);
  }
};

export default registerFormMiddleware;
