// == Import : npm
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// == Import : local
import Research from 'src/components/Research';

// Action Creators
import { changeAddressInput, setRedirectToMap, setAddressLatLng, setRedirectToMapFalse } from 'src/store/reducerMap';

const mapStateToProps = state => ({
  address: state.reducerMap.address,
  redirectToMap: state.reducerMap.redirectToMap,
});


const mapDispatchToProps = dispatch => ({
  changeAdress: (address) => {
    dispatch(changeAddressInput(address));
  },
  setRedirectToMap: () => {
    dispatch(setRedirectToMap());
  },
  setAddressLatLng: (latLng) => {
    dispatch(setAddressLatLng(latLng));
  },
  setRedirectToMapFalse: () => {
    dispatch(setRedirectToMapFalse());
  },
});

// Container
const ResearchContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Research));

// == Export
export default ResearchContainer;
