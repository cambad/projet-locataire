// import npm
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import axios from 'axios';

// local import
import AuthenticationMethods from 'src/components/AuthenticationMethods';
import {
  getAddressLatLng,
  changeFormLoading,
  changeFormSubmitSuccess,
  changeFormSubmitFailure,
  deleteFormErrors,
} from 'src/store/reducer';

const formRatingMiddleware = store => next => (action) => {

  switch (action.type) {
    case 'SUBMIT_RATING_FORM': {
      // on remet à zéro les erreurs de soumission du formulaire
      store.dispatch(deleteFormErrors());

      // check if the form is correct
      // First, create a variable to know at the end, if everything is correct
      let correctForm = false;
      // retrieve state from reducer
      const { reducer } = store.getState();

      // trim string input
      const address = reducer.addressForm.trim();
      const location = reducer.location.trim();
      const abstractedComment = reducer.abstractedComment.trim();
      const positiveComment = reducer.positiveComment.trim();
      const negativeComment = reducer.negativeComment.trim();

      // check if every fields are completed
      if (address.length > 0) {
        if (
          reducer.floorNumber !== 0
          && location.length > 0
          && reducer.floorArea !== 0
          && reducer.numberOfRooms !== 0
          && reducer.rent !== 0
        ) {
          if (
            abstractedComment.length > 0
            && positiveComment.length > 0
            && negativeComment.length > 0
          ) {
            if (reducer.isVisiteur) {
              // iterate through the values from an object to test the value and send true if value > 0
              correctForm = Object.values(reducer.visitorValue).every(currentValue => currentValue > 0);
            }
            else {
              correctForm = Object.values(reducer.tenantValue).every(currentValue => currentValue > 0);
            }
          }
        }
      }
      else {
        correctForm = false;
      }

      // If correctForm = true, we can request the latitude and longitude with the address
      if (correctForm) {
        // create dataToSend variable
        let dataToSend = {};
        // ajax request
        geocodeByAddress(reducer.addressForm)
          .then((results) => {
            return (getLatLng(results[0]));
          })
          .then((latLng) => {
            // Get latitude and longitude and dispatch it in reducer
            store.dispatch(getAddressLatLng(latLng));
            // Retrieve latitude and longitude from reducer
            const { latLng: spot } = store.getState().reducer;
            // change formLoading to true to display a loading icone
            store.dispatch(changeFormLoading());

            // get the userID in token
            const authenticationObject = new AuthenticationMethods();
            const token = authenticationObject.getToken();

            // Configuration Axios to insert the token in the header of the query to send
            axios.interceptors.request.use((config) => {
              config.headers.Authorization = `Bearer ${token}`;
              return config;
            });
            
            dataToSend = {
              "address": reducer.addressForm,
              "floor_number": reducer.floorNumber,
              "location": reducer.location,
              "area": reducer.floorArea,
              "rooms": reducer.numberOfRooms,
              "rental": reducer.rent,
              "lat": spot.lat,
              "lng": spot.lng,
              "title": reducer.abstractedComment,
              "positive": reducer.positiveComment,
              "negative": reducer.negativeComment,
              "still_in": reducer.stillInApartment,
              "tenant": reducer.isLocataire,
              "recommendation": reducer.visitorValue.recommendationValue,
              "exterior": reducer.visitorValue.exteriorValue,
              "interior": reducer.visitorValue.interiorValue,
              "contact": reducer.visitorValue.contactValue,
              "accessibility": reducer.tenantValue.accessiblityValue,
              "apartmentEnvironment": reducer.tenantValue.apartmentEnvironmentValue,
              "traffic": reducer.tenantValue.circulationValue,
              "exteriorBuilding": reducer.tenantValue.exteriorValue,
              "buildingEnvironment": reducer.tenantValue.buildingEnvironmentValue,
              "insulation": reducer.tenantValue.isolationValue,
              "cleanliness": reducer.tenantValue.cleanlinessValue,
              "brightness": reducer.tenantValue.brightnessValue,
              "firstContact": reducer.tenantValue.contactValue,
              "contact_quality": reducer.tenantValue.contactQualityValue,
            };

            // Request to send the datas to the API
            axios.post('https://api.rate-my-rent.fr/api/apartment/new', dataToSend)
              .then((response) => {
                // stop displaying the form submit loader
                store.dispatch(changeFormLoading());
                store.dispatch(changeFormSubmitSuccess());
              })
              .catch((error) => {
                // stop displaying the form submit loader
                store.dispatch(changeFormLoading());
                // Get error from server back
                console.log('BAD RESPONSE : ', error.response);


                // get fields error from server
                const { violations } = error.response.data;
                if (violations) {
                  store.dispatch(changeFormSubmitFailure(violations));
                }
                else {
                  // create an error array for the other error from the server
                  const otherServerError = [
                    {
                      propertyPath: 'Internat Server Error',
                      title: 'Une erreur est survenue lors de la réception du formulaire',
                    },
                  ];
                  store.dispatch(changeFormSubmitFailure(otherServerError));
                }
              });
          })
          .catch((error) => {
            // If there is no address, display the error
            next(action);
          });
      }
      else {
        // the action can pass in the reducer to change a state and display an error message
        next(action);
      }
      break;
    }
    default:
      next(action);
  }
};

export default formRatingMiddleware;
