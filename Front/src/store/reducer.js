// == Initial State
const initialState = {
  formSubmitFailure: false,
  formSubmitSuccess: false,
  formLoading: false,
  isConnected: true,
  errorFormSubmit: false,
  visitorValue: {
    recommendationValue: 0,
    exteriorValue: 0,
    interiorValue: 0,
    contactValue: 0,
  },
  tenantValue: {
    accessiblityValue: 0,
    apartmentEnvironmentValue: 0,
    circulationValue: 0,
    exteriorValue: 0,
    buildingEnvironmentValue: 0,
    isolationValue: 0,
    cleanlinessValue: 0,
    brightnessValue: 0,
    contactValue: 0,
    contactQualityValue: 0,
  },
  addressForm: '',
  latLng: {
    lat: 0,
    lng: 0,
  },
  isVisiteur: false,
  isLocataire: false,
  isDisplayed: false,
  stillInApartment: true,
  floorNumber: 0,
  location: '',
  floorArea: 0,
  numberOfRooms: 0,
  rent: 0,
  abstractedComment: '',
  positiveComment: '',
  negativeComment: '',
};

// == Types
const CHANGE_IS_LOCATAIRE = 'CHANGE_IS_LOCATAIRE';
const CHANGE_IS_VISITEUR = 'CHANGE_IS_VISITEUR';
const CHANGE_ADDRESS_FORM_INPUT = 'CHANGE_ADDRESS_FORM_INPUT';
const CHANGE_STILL_IN = 'CHANGE_STILL_IN';
const CHANGE_FLOOR_NUMBER = 'CHANGE_FLOOR_NUMBER';
const CHANGE_LOCATION = 'CHANGE_LOCATION';
const CHANGE_FLOOR_AREA = 'CHANGE_FLOOR_AREA';
const CHANGE_NUMBER_ROOMS = 'CHANGE_NUMBER_ROOMS';
const CHANGE_RENT = 'CHANGE_RENT';
const CHANGE_ABSTRACTED_COMMENT = 'CHANGE_ABSTRACTED_COMMENT';
const VISITOR_STARS = 'VISITOR_STARS';
const TENANT_STARS = 'TENANT_STARS';
const GET_LAT_LNG = 'GET_LAT_LNG';
const CHANGE_POSITIVE_COMMENT = 'CHANGE_POSITIVE_COMMENT';
const CHANGE_NEGATIVE_COMMENT = 'CHANGE_NEGATIVE_COMMENT';
const SUBMIT_RATING_FORM = 'SUBMIT_RATING_FORM';
const CHANGE_FORM_LOADING = 'CHANGE_FORM_LOADING';
const CHANGE_FORM_SUBMIT_SUCCESS = 'CHANGE_FORM_SUBMIT_SUCCESS';
const CHANGE_FORM_SUBMIT_FAILURE = 'CHANGE_FORM_SUBMIT_FAILURE';

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
          apartmentEnvironmentValue: 0,
          circulationValue: 0,
          exteriorValue: 0,
          buildingEnvironmentValue: 0,
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
        stillInApartment: !action.checked,
      };

    case CHANGE_FLOOR_NUMBER:
      return {
        ...state,
        floorNumber: action.value,
      };

    case CHANGE_LOCATION:
      return {
        ...state,
        location: action.value,
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
      };
    
    case CHANGE_ABSTRACTED_COMMENT:
      return {
        ...state,
        abstractedComment: action.value,
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

    case CHANGE_POSITIVE_COMMENT:
      return {
        ...state,
        positiveComment: action.comment,
      };

    case CHANGE_NEGATIVE_COMMENT:
      return {
        ...state,
        negativeComment: action.comment,
      };
    
    case SUBMIT_RATING_FORM:
      return {
        ...state,
        errorFormSubmit: true,
      };

    case CHANGE_FORM_LOADING:
      return {
        ...state,
        formLoading: !state.formLoading,
      };

    case CHANGE_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        formSubmitSuccess: !state.formSubmitSuccess,
      };

    case CHANGE_FORM_SUBMIT_FAILURE:
      return {
        ...state,
        formSubmitFailure: !state.formSubmitFailure,
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

export const changeFloorNumber = value => ({
  type: CHANGE_FLOOR_NUMBER,
  value,
});

export const changeLocation = value => ({
  type: CHANGE_LOCATION,
  value,
});

export const changeRent = value => ({
  type: CHANGE_RENT,
  value,
});

export const changeAddressFormInput = address => ({
  type: CHANGE_ADDRESS_FORM_INPUT,
  address,
});

export const changeStillInApartment = checked => ({
  type: CHANGE_STILL_IN,
  checked,
});

export const changeFloorArea = value => ({
  type: CHANGE_FLOOR_AREA,
  value,
});

export const changeNumberOfRooms = value => ({
  type: CHANGE_NUMBER_ROOMS,
  value,
});

export const visitorStars = (stars, name) => ({
  type: VISITOR_STARS,
  stars,
  name,
});

export const changeAbstractedComment = value => ({
  type: CHANGE_ABSTRACTED_COMMENT,
  value,
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

export const changePositiveComment = comment => ({
  type: CHANGE_POSITIVE_COMMENT,
  comment,
});

export const changeNegativeComment = comment => ({
  type: CHANGE_NEGATIVE_COMMENT,
  comment,
});

export const submitRatingForm = () => ({
  type: SUBMIT_RATING_FORM,
});

export const changeFormLoading = () => ({
  type: CHANGE_FORM_LOADING,
});

export const changeFormSubmitSuccess = () => ({
  type: CHANGE_FORM_SUBMIT_SUCCESS,
});

export const changeFormSubmitFailure = () => ({
  type: CHANGE_FORM_SUBMIT_FAILURE,
});

// == Selectors


// == Export
export default reducer;
