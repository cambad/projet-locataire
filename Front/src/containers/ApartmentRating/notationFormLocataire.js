// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import notationFormLocataire from 'src/components/ApartmentRating/notationFormLocataire';

// == Action Creators
import { tenantStars, changeStillInApartment } from 'src/store/reducer';


const mapStateToProps = state => ({
  tenantValue: state.reducer.tenantValue,
  stillInApartment: state.reducer.stillInApartment,
});


const mapDispatchToProps = dispatch => ({
  changeStarNumber: (value, name) => {
    dispatch(tenantStars(value, name));
  },
  isStillInApartment: (checked) => {
    dispatch(changeStillInApartment(checked));
  },
});

// == Container
const notationFormLocataireContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(notationFormLocataire);

// == Export
export default notationFormLocataireContainer;
