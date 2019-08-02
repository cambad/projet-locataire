// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ResearchMap from 'src/components/ResearchMap';

// Action Creators
import { changeAddressInput, setAddressLatLng, setFullScreen } from 'src/store/reducerMap';

const mapStateToProps = state => ({
  address: state.reducerMap.address,
  latLng: state.reducerMap.latLng,
  zoom: state.reducerMap.zoom,
  dropdown: state.reducerMap.dropdown,
  fullscreen: state.reducerMap.fullscreen,
});


const mapDispatchToProps = dispatch => ({
  changeAdress: (address) => {
    dispatch(changeAddressInput(address));
  },
  setAddressLatLng: (latLng) => {
    dispatch(setAddressLatLng(latLng));
  },
  goToFullScreen: () => {
    dispatch(setFullScreen());
  },
});

// Container
const ResearchMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResearchMap);

// == Export
export default ResearchMapContainer;
