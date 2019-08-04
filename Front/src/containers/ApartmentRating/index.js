// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ApartmentRating from 'src/components/ApartmentRating';

// Action Creators
import {
  changeIsLocataire,
  changeIsVisiteur,
  changeAddressFormInput,
  changeStillInApartment,
  changeNotLiveInApartment,
  changeFloorNumber,
  changeLocation,
  changeFloorArea,
  changeNumberOfRooms,
  changeRent,
  changeAbstractedComment,
  changePositiveComment,
  changeNegativeComment,
  submitRatingForm,
  changeRecommendationPositive,
  changeRecommendationNegative,
} from 'src/store/reducer';


const mapStateToProps = state => ({
  address: state.reducer.addressForm,
  isLocataire: state.reducer.isLocataire,
  isVisiteur: state.reducer.isVisiteur,
  isDisplayed: state.reducer.isDisplayed,
  floorNumber: state.reducer.floorNumber,
  location: state.reducer.location,
  floorArea: state.reducer.floorArea,
  numberOfRooms: state.reducer.numberOfRooms,
  rent: state.reducer.rent,
  abstractedComment: state.reducer.abstractedComment,
  positiveComment: state.reducer.positiveComment,
  negativeComment: state.reducer.negativeComment,
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
  isStillInApartment: () => {
    dispatch(changeStillInApartment());
  },
  isNotLiveInApartment: () => {
    dispatch(changeNotLiveInApartment());
  },
  changeFloorNumber: (value) => {
    dispatch(changeFloorNumber(value));
  },
  changeLocation: (value) => {
    dispatch(changeLocation(value));
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
  changeAbstractedComment: (value) => {
    dispatch(changeAbstractedComment(value));
  },
  changePositiveComment: (value) => {
    dispatch(changePositiveComment(value));
  },
  changeNegativeComment: (value) => {
    dispatch(changeNegativeComment(value));
  },
  submitRatingForm: () => {
    dispatch(submitRatingForm());
  },
  changeRecommendationPositive: () => {
    dispatch(changeRecommendationPositive());
  },
  changeRecommendationNegative: () => {
    dispatch(changeRecommendationNegative());
  },
});

// Container
const ApartmentRatingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentRating);

// == Export
export default ApartmentRatingContainer;
