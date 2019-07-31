// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ApartmentRating from 'src/components/ApartmentRating';

// Action Creators
import {
  changeIsLocataire,
  changeIsVisiteur,
  changeAddressInput,
  getAddressLatLng,
} from 'src/store/reducer';

const mapStateToProps = state => ({
  address: state.address,
  isLocataire: state.isLocataire,
  isVisiteur: state.isVisiteur,
  isDisplayed: state.isDisplayed,
});

const mapDispatchToProps = dispatch => ({
  isLocataireChange: () => {
    dispatch(changeIsLocataire());
  },
  isVisiteurChange: () => {
    dispatch(changeIsVisiteur());
  },
  changeAdress: (address) => {
    dispatch(changeAddressInput(address));
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
