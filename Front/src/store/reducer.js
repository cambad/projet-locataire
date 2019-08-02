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
  agency: false,
  owner: false,
  floorArea: 0,
  numberOfRooms: 0,
  rent: 0,
};

// == Types
const CHANGE_IS_LOCATAIRE = 'CHANGE_IS_LOCATAIRE';
const CHANGE_IS_VISITEUR = 'CHANGE_IS_VISITEUR';
const CHANGE_ADDRESS_FORM_INPUT = 'CHANGE_ADDRESS_FORM_INPUT';
const CHANGE_STILL_IN = 'CHANGE_STILL_IN';
const CHANGE_NOT_LIVE = 'CHANGE_NOT_LIVE';
const CHANGE_AGENCY = 'CHANGE_AGENCY';
const CHANGE_OWNER = 'CHANGE_OWNER';
const CHANGE_FLOOR_AREA = 'CHANGE_FLOOR_AREA';
const CHANGE_NUMBER_ROOMS = 'CHANGE_NUMBER_ROOMS';
const CHANGE_RENT = 'CHANGE_RENT';
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
        visitorValue: {
          ...state.visitorValue,
          recommendationValue: 0,
          exteriorValue: 0,
          interiorValue: 0,
          contactValue: 0,
        },
      };

    case CHANGE_IS_VISITEUR:
      return {
        ...state,
        isVisiteur: true,
        isLocataire: false,
        isDisplayed: true,
        tenantValue: {
          ...state.tenantValue,
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

    case CHANGE_AGENCY:
      return {
        ...state,
        agency: true,
        owner: false,
      };

    case CHANGE_OWNER:
      return {
        ...state,
        agency: false,
        owner: true,
      };

    case CHANGE_FLOOR_AREA:
      return {
        ...state,
        floorArea: action.value,
      };

    case CHANGE_NUMBER_ROOMS:
      return {
        ...state,
        numberOfRooms: action.value,
      };

    case CHANGE_RENT:
      return {
        ...state,
        rent: action.value,
      }

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

export const changeAgency = () => ({
  type: CHANGE_AGENCY,
});

export const changeOwner = () => ({
  type: CHANGE_OWNER,
});

export const changeAddressFormInput = address => ({
  type: CHANGE_ADDRESS_FORM_INPUT,
  address,
});

export const changeStillInApartment = () => ({
  type: CHANGE_STILL_IN,
});

export const changeNotLiveInApartment = () => ({
  type: CHANGE_NOT_LIVE,
});

export const changeFloorArea = value => ({
  type: CHANGE_FLOOR_AREA,
  value,
});

export const changeNumberOfRooms = value => ({
  type: CHANGE_NUMBER_ROOMS,
  value,
});

export const changeRent = value => ({
  type: CHANGE_RENT,
  value,
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
