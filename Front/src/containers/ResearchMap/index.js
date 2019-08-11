// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ResearchMap from 'src/components/ResearchMap';

// Action Creators
import {
  changeAddressInput,
  setAddressLatLng,
  setFullScreen,
  setZoom,
  disableFullscreen,
} from 'src/store/reducerMap';

import { setLandingPageToFalse } from 'src/store/reducer';

const mapStateToProps = state => ({
  address: state.reducerMap.address,
  lat: state.reducerMap.lat,
  lng: state.reducerMap.lng,
  zoom: state.reducerMap.zoom,
  dropdown: state.reducerMap.dropdown,
  fullscreen: state.reducerMap.fullscreen,
  landingPage: state.reducer.landingPage,
});


const mapDispatchToProps = dispatch => ({
  changeAdress: (address) => {
    dispatch(changeAddressInput(address));
  },
  setAddressLatLng: (lat, lng) => {
    dispatch(setAddressLatLng(lat, lng));
  },
  goToFullScreen: () => {
    dispatch(setFullScreen());
  },
  setZoom: (newZoom) => {
    dispatch(setZoom(newZoom));
  },
  disableFullscreen: () => {
    dispatch(disableFullscreen());
  },
  setLandingPageToFalse: () => {
    dispatch(setLandingPageToFalse());
  },
});

// Container
const ResearchMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResearchMap);

// == Export
export default ResearchMapContainer;
