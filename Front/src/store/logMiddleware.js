// import npm
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import axios from 'axios';

import { getAddressLatLng } from 'src/store/reducer';

const logMiddleware = store => next => (action) => {

  switch (action.type) {
    case 'SUBMIT_RATING_FORM': {
      // retrieve latitue and longitude from the address
      const { addressForm } = store.getState().reducer;
      // ajax request
      geocodeByAddress(addressForm)
        .then((results) => {
          return (getLatLng(results[0]));
        })
        .then((latLng) => {
          store.dispatch(getAddressLatLng(latLng));
        })
        .catch(error => console.error('Error', error));

      // axios.post('')
      break;
    }
    default:
      next(action);
  }
};

export default logMiddleware;
