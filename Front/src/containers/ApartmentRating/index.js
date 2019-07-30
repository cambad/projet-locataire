// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ApartmentRating from 'src/components/ApartmentRating';

// Action Creators
import {
  changeIsLocataire,
  changeIsVisiteur,
  changeAddressInput,
  recommendationStars,
  exteriorStars,
  interiorStars,
  contactStars,
} from 'src/store/reducer';

const mapStateToProps = state => ({
  address: state.address,
  accesibilityValue: state.accesibilityValue,
  environnementValue: state.environnementValue,
  circulationValue: state.circulationValue,
  exteriorValue: state.exteriorValue,
  interiorValue: state.interiorValue,
  isolationValue: state.isolationValue,
  cleanlinessValue: state.cleanlinessValue,
  lightValue: state.lightValue,
  contactValue: state.contactValue,
  contactQualityValue: state.contactQualityValue,
  recommendationValue: state.recommendationValue,
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
  recommendationChange: (stars) => {
    dispatch(recommendationStars(stars));
  },
  exteriorChange: (stars) => {
    dispatch(exteriorStars(stars));
  },
  interiorChange: (stars) => {
    dispatch(interiorStars(stars));
  },
  contactChange: (stars) => {
    dispatch(contactStars(stars));
  },
});

// Container
const ApartmentRatingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentRating);

// == Export
export default ApartmentRatingContainer;
