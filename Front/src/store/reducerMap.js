// == Initial State
const initialState = {
  address: '',
  lat: 46.603354,
  lng: 1.888334,
  fullscreen: false,
  redirectToMap: false,
  dropdown: false,
  zoom: 5,
};

// == Types
const CHANGE_ADDRESS_INPUT = 'CHANGE_ADDRESS_INPUT';
const SET_REDIRECT_TO_MAP = 'SET_REDIRECT_TO_MAP';
const SET_ADDRESS_LAT_LNG = 'SET_ADDRESS_LAT_LNG';
const SET_FULLSCREEN = 'SET_FULLSCREEN';
const SET_REDIRECT_TO_MAP_FALSE = 'SET_REDIRECT_TO_MAP_FALSE';
const SET_ZOOM = 'SET_ZOOM';

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
        address: '',
      };
    }
    case SET_REDIRECT_TO_MAP_FALSE: {
      return {
        ...state,
        redirectToMap: false,
        address: '',
      };
    }
    case SET_ADDRESS_LAT_LNG: {
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
      };
    }
    case SET_FULLSCREEN: {
      return {
        ...state,
        fullscreen: true,
        zoom: 15,
        dropdown: false,
        address: '',
      };
    }
    case SET_ZOOM: {
      return {
        ...state,
        zoom: action.newZoom,
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

export const setAddressLatLng = (lat, lng) => ({
  type: SET_ADDRESS_LAT_LNG,
  lat,
  lng,
});

export const setFullScreen = () => ({
  type: SET_FULLSCREEN,
});

export const setRedirectToMapFalse = () => ({
  type: SET_REDIRECT_TO_MAP_FALSE,
});

export const setZoom = newZoom => ({
  type: SET_ZOOM,
  newZoom,
});

// == Selectors


// == Export
export default reducer;
