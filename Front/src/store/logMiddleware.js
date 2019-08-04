// import npm
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import axios from 'axios';

import { getAddressLatLng } from 'src/store/reducer';

const logMiddleware = store => next => (action) => {

  switch (action.type) {
    case 'SUBMIT_RATING_FORM': {
      // prepare data
      const { reducer } = store.getState();

      // creating the object to send
      const dataToSend = {
        "address": reducer.addressForm,
        "floor_number": reducer.floorNumber,
        "location": reducer.location,
        "area": reducer.floorArea,
        "rooms": reducer.numberOfRooms,
        "rental": reducer.rent,
        "lat": reducer.latLng.lat,
        "lng": reducer.latLng.lng,
        "title": reducer.abstractedComment,
        "positive": reducer.positiveComment,
        "negative": reducer.negativeComment,
        "still_in": reducer.stillInApartment,
        "recommendation": reducer.visitorValue.recommendationValue,
        "exterior": reducer.visitorValue.exteriorValue,
        "interior": reducer.visitorValue.interiorValue,
        "contact": reducer.visitorValue.contactValue,
        "accessibility": reducer.tenantValue.accessiblityValue,
        "apartment_environment": reducer.tenantValue.apartmentEnvironmentValue,
        "traffic": reducer.tenantValue.circulationValue,
        "exterior_building": reducer.tenantValue.exteriorValue,
        "building_environment": reducer.tenantValue.buildingEnvironmentValue,
        "insulation": reducer.tenantValue.isolationValue,
        "cleanliness": reducer.tenantValue.cleanlinessValue,
        "brightness": reducer.tenantValue.brightnessValue,
        "first_contact": reducer.tenantValue.contactValue,
        "contact_quality": reducer.tenantValue.contactQualityValue
      };

      console.log(dataToSend);

      // retrieve latitue and longitude from the address
      // const { addressForm } = store.getState().reducer;
      // // ajax request
      // geocodeByAddress(addressForm)
      //   .then((results) => {
      //     return (getLatLng(results[0]));
      //   })
      //   .then((latLng) => {
      //     store.dispatch(getAddressLatLng(latLng));
      //   })
      //   .catch(error => console.error('Error', error));

      axios.post('https://api.rate-my-rent.fr/api/review/new', dataToSend)
        .then(response => console.log(response));
      break;
    }
    default:
      next(action);
  }
};

export default logMiddleware;
