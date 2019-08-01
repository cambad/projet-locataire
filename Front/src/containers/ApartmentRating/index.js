// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ApartmentRating from 'src/components/ApartmentRating';

// Action Creators
import {
  changeIsLocataire,
  changeIsVisiteur,
  // changeAddressInput,
  changeAddressFormInput,
  getAddressLatLng,
} from 'src/store/reducer';

const mapStateToProps = state => ({
  address: state.reducer.addressForm,
  isLocataire: state.reducer.isLocataire,
  isVisiteur: state.reducer.isVisiteur,
  isDisplayed: state.reducer.isDisplayed,
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
});

// Container
const ApartmentRatingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentRating);

// == Export
export default ApartmentRatingContainer;
