// import npm
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import axios from 'axios';

const logMiddleware = store => next => (action) => {
  // console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  console.log(action);

  switch (action.type) {
  //   case FETCH_QQCHOSE:
  //      axios.get(url)
  //        .then(response => {
  //              // Ici tu sais que tu as obtenu avec succès ta réponse
  //              // Tu peux la récupérer dans response.data
  //           //  const { data } = response.
  //           //      Il faut ensuite informer le reducer des nouvelles données reçues
  //           //    store.dispatch(receivedQqchose(data));
  // })
  //        .catch()

    case 'SUBMIT_RATING_FORM': {
      // retrieve latitue and longitude from the address
      const { addressForm } = store.getState().reducer;
      // ajax request
      // geocodeByAddress(addressForm)
      //   .then((results) => {
      //     return (getLatLng(results[0]));
      //   })
      //   .then((latLng) => {
      //     // getAddressLatLng(latLng);
      //   })
      //   .catch(error => console.error('Error', error));

      // axios.post('')
      break;
    }
    default:
      next(action);
  }
};

export default logMiddleware;
