// == Import : npm
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// == Import : local
import Research from 'src/components/Research';

// Action Creators
import {
  changeAddressInput,
  setRedirectToMap,
  setAddressLatLng,
  setRedirectToMapFalse,
  setZoom,
} from 'src/store/reducerMap';

import { formSubmitDoneToFalse } from 'src/store/reducer';

const mapStateToProps = state => ({
  // add formSubmitDone from reducer
  formSubmitDone: state.reducer.formSubmitDone,
  isConnected: state.reducer.isConnected,
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
  setAddressLatLng: (lat, lng) => {
    dispatch(setAddressLatLng(lat, lng));
  },
  setRedirectToMapFalse: () => {
    dispatch(setRedirectToMapFalse());
  },
  setZoom: (newZoom) => {
    dispatch(setZoom(newZoom));
  },
  // dispatch action to reducer.js
  formSubmitDoneToFalse: () => {
    dispatch(formSubmitDoneToFalse());
  },
});

// Container
const ResearchContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Research));

// == Export
export default ResearchContainer;
