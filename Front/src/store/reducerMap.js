// == Initial State
const initialState = {
  address: '',
  latLng: {
    lat: 46.603354,
    lng: 1.888334,
  },
  fullscreen: false,
  redirectToMap: false,
  dropdown: false,
  zoom: 10,
};

// == Types
const CHANGE_ADDRESS_INPUT = 'CHANGE_ADDRESS_INPUT';
const SET_REDIRECT_TO_MAP = 'SET_REDIRECT_TO_MAP';
const SET_ADDRESS_LAT_LNG = 'SET_ADDRESS_LAT_LNG';
const SET_FULLSCREEN = 'SET_FULLSCREEN';

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
        fullscreen: true,
      };
    }
    case SET_ADDRESS_LAT_LNG: {
      return {
        ...state,
        latLng: action.latLng,
      };
    }
    case SET_FULLSCREEN: {
      return {
        ...state,
        fullscreen: true,
        zoom: 15,
        dropdown: false,
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

export const setFullScreen = () => ({
  type: SET_FULLSCREEN,
});
// == Selectors


// == Export
export default reducer;
