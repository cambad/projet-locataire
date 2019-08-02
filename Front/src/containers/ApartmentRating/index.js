// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ApartmentRating from 'src/components/ApartmentRating';

// Action Creators
import {
  changeIsLocataire,
  changeIsVisiteur,
  changeAddressFormInput,
  getAddressLatLng,
  changeStillInApartment,
  changeNotLiveInApartment,
  changeAgency,
  changeOwner,
  changeFloorArea,
  changeNumberOfRooms,
  changeRent,
} from 'src/store/reducer';


const mapStateToProps = state => ({
  address: state.reducer.addressForm,
  isLocataire: state.reducer.isLocataire,
  isVisiteur: state.reducer.isVisiteur,
  isDisplayed: state.reducer.isDisplayed,
  floorArea: state.reducer.floorArea,
  numberOfRooms: state.reducer.numberOfRooms,
  rent: state.reducer.rent,
});


const mapDispatchToProps = dispatch => ({
  isLocataireChange: () => {
    dispatch(changeIsLocataire());
  },
  isVisiteurChange: () => {
    dispatch(changeIsVisiteur());
  },
  changeAddress: (address) => {
    dispatch(changeAddressFormInput(address));
  },
  getAddressLatLng: (latLng) => {
    dispatch(getAddressLatLng(latLng));
  },
  isStillInApartment: () => {
    dispatch(changeStillInApartment());
  },
  isNotLiveInApartment: () => {
    dispatch(changeNotLiveInApartment());
  },
  isAgency: () => {
    dispatch(changeAgency());
  },
  isOwner: () => {
    dispatch(changeOwner());
  },
  changeFloorArea: (value) => {
    dispatch(changeFloorArea(value));
  },
  changeNumberOfRooms: (value) => {
    dispatch(changeNumberOfRooms(value));
  },
  changeRent: (value) => {
    dispatch(changeRent(value));
  },
});

// Container
const ApartmentRatingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentRating);

// == Export
export default ApartmentRatingContainer;
