// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import notationFormLocataire from 'src/components/ApartmentRating/notationFormLocataire';

// == Action Creators
import { tenantStars } from 'src/store/reducer';


const mapStateToProps = state => ({
  tenantValue: state.tenantValue,
});


const mapDispatchToProps = dispatch => ({
  changeStarNumber: (value, name) => {
    dispatch(tenantStars(value, name));
  },
});

// == Container
const notationFormLocataireContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(notationFormLocataire);

// == Export
export default notationFormLocataireContainer;
