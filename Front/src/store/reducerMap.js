// == Initial State
const initialState = {
  address: '',
  latLng: {
    lat: '',
    lng: '',
  },
  fullscreen: false,
  redirectToMap: false,
  dropdown: false,
  zoom: 15,
};

// == Types
const CHANGE_ADDRESS_INPUT = 'CHANGE_ADDRESS_INPUT';
const SET_REDIRECT_TO_MAP = 'SET_REDIRECT_TO_MAP';
const SET_ADDRESS_LAT_LNG = 'SET_ADDRESS_LAT_LNG';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ADDRESS_INPUT:
      return {
        ...state,
        address: action.address,
      };
    case SET_REDIRECT_TO_MAP: {
      return {
        ...state,
        redirectToMap: true,
      };
    }
    case SET_ADDRESS_LAT_LNG: {
      return {
        ...state,
        latLng: {
          lat: action.latLng.lat,
          lng: action.latLng.lng,
        },
      };
    }
    default:
      return state;
  }
};

// == Action Creators
export const changeAddressInput = address => ({
  type: CHANGE_ADDRESS_INPUT,
  address,
});

export const setRedirectToMap = () => ({
  type: SET_REDIRECT_TO_MAP,
});

export const setAddressLatLng = latLng => ({
  type: SET_ADDRESS_LAT_LNG,
  latLng,
});
// == Selectors


// == Export
export default reducer;
