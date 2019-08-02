// == Initial State
const initialState = {
  isConnected: true,
  visitorValue: {
    recommendationValue: 0,
    exteriorValue: 0,
    interiorValue: 0,
    contactValue: 0,
  },
  tenantValue: {
    accessiblityValue: 0,
    apartmentEnvironnementValue: 0,
    circulationValue: 0,
    exteriorValue: 0,
    buildingEnvironnementValue: 0,
    isolationValue: 0,
    cleanlinessValue: 0,
    brightnessValue: 0,
    contactValue: 0,
    contactQualityValue: 0,
  },
  addressForm: '',
  latLng: {
    lat: '',
    lng: '',
  },
  isVisiteur: false,
  isLocataire: false,
  isDisplayed: false,
  stillInApartment: false,
  notLiveInApartment: false,
};

// == Types
const CHANGE_IS_LOCATAIRE = 'CHANGE_IS_LOCATAIRE';
const CHANGE_IS_VISITEUR = 'CHANGE_IS_VISITEUR';
const CHANGE_ADDRESS_FORM_INPUT = 'CHANGE_ADDRESS_FORM_INPUT';
const CHANGE_STILL_IN = 'CHANGE_STILL_IN';
const CHANGE_NOT_LIVE = 'CHANGE_NOT_LIVE';
const VISITOR_STARS = 'VISITOR_STARS';
const TENANT_STARS = 'TENANT_STARS';
const GET_LAT_LNG = 'GET_LAT_LNG';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_IS_LOCATAIRE:
      return {
        ...state,
        isVisiteur: false,
        isLocataire: true,
        isDisplayed: true,
      };

    case CHANGE_IS_VISITEUR:
      return {
        ...state,
        isVisiteur: true,
        isLocataire: false,
        isDisplayed: true,
      };

    case CHANGE_ADDRESS_FORM_INPUT:
      return {
        ...state,
        addressForm: action.address,
      };

    case CHANGE_STILL_IN:
      return {
        ...state,
        stillInApartment: true,
        notLiveInApartment: false,
      };

    case CHANGE_NOT_LIVE:
      return {
        ...state,
        stillInApartment: false,
        notLiveInApartment: true,
      };

    case VISITOR_STARS:
      return {
        ...state,
        visitorValue: {
          ...state.visitorValue,
          [action.name]: action.stars,
        },
      };

    case TENANT_STARS:
      return {
        ...state,
        tenantValue: {
          ...state.tenantValue,
          [action.name]: action.stars,
        },
      };

    case GET_LAT_LNG:
      return {
        ...state,
        latLng: action.latLng,
      };

    default:
      return state;
  }
};

// == Action Creators
export const changeIsLocataire = () => ({
  type: CHANGE_IS_LOCATAIRE,
});

export const changeIsVisiteur = () => ({
  type: CHANGE_IS_VISITEUR,
});

export const changeAddressFormInput = address => ({
  type: CHANGE_ADDRESS_FORM_INPUT,
  address,
});

export const changeStillInApartment = checked => ({
  type: CHANGE_STILL_IN,
  checked,
});

export const changeNotLiveInApartment = checked => ({
  type: CHANGE_NOT_LIVE,
  checked,
});

export const visitorStars = (stars, name) => ({
  type: VISITOR_STARS,
  stars,
  name,
});

export const tenantStars = (stars, name) => ({
  type: TENANT_STARS,
  stars,
  name,
});

export const getAddressLatLng = latLng => ({
  type: GET_LAT_LNG,
  latLng,
});

// == Selectors


// == Export
export default reducer;
