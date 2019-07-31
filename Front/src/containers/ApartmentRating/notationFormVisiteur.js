// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import notationFormVisiteur from 'src/components/ApartmentRating/notationFormVisiteur';

// == Action Creators
import {
  visitorStars,
} from 'src/store/reducer';


const mapStateToProps = state => ({
  visitorValue: state.visitorValue,
});


const mapDispatchToProps = dispatch => ({
  changeStarNumber: (value, name) => {
    dispatch(visitorStars(value, name));
  },
});

// == Container
const notationFormVisiteurContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(notationFormVisiteur);

// == Export
export default notationFormVisiteurContainer;

