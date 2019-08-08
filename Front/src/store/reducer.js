// == Initial State
const initialState = {
  formSubmitDone: false,
  formSubmitFailure: [],
  formSubmitSuccess: false,
  errorFormSubmit: false,
  formLoading: false,
  isConnected: false,
  landingPage: false,
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
  firstName: '',
  lastName: '',
  email: '',
  password: '',
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
const DELETE_FORM_ERROR = 'DELETE_FORM_ERROR';
const SET_REDIRECT_ERROR_FORM_SUBMIT = 'SET_REDIRECT_ERROR_FORM_SUBMIT';
const SUBMIT_DONE_TO_FALSE = 'SUBMIT_DONE_TO_FALSE';
const SUBMIT_REGISTER_FORM = 'SUBMIT_REGISTER_FORM';
const SUBMIT_CONNECT_FORM = 'SUBMIT_CONNECT_FORM';
const CHANGE_FIRSTNAME = 'CHANGE_FIRSTNAME';
const CHANGE_LASTNAME = 'CHANGE_LASTNAME';
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const RESET_DATA = 'RESET_DATA';
const CHANGE_ISCONNECTED = 'CHANGE_ISCONNECTED';
const CHANGE_LANDING_PAGE_FALSE = 'CHANGE_LANDING_PAGE_FALSE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_DATA:
      return {
        ...state,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };
    case CHANGE_FIRSTNAME:
      return {
        ...state,
        firstName: action.firstName,
      };
   
    case CHANGE_LASTNAME:
      return {
        ...state,
        lastName: action.lastName,
      };

    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };

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

    case SUBMIT_REGISTER_FORM:
      return {
        ...state,
      };

    case SUBMIT_CONNECT_FORM:
      return {
        ...state,
        isConnected: true,
        email: '',
        password: '',
        landingPage: true,
      };

    case CHANGE_FORM_LOADING:
      return {
        ...state,
        formLoading: !state.formLoading,
      };

    case CHANGE_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        formSubmitSuccess: true,
      };

    case CHANGE_FORM_SUBMIT_FAILURE:
      return {
        ...state,
        formSubmitFailure: action.errors,
      };

    case DELETE_FORM_ERROR:
      return {
        ...state,
        formSubmitDone: false,
        formSubmitFailure: [],
        formSubmitSuccess: false,
        errorFormSubmit: false,
      };

    case SET_REDIRECT_ERROR_FORM_SUBMIT:
      return {
        ...state,
        formSubmitDone: true,
        formSubmitFailure: [],
        formSubmitSuccess: false,
        errorFormSubmit: false,
        formLoading: false,
        isConnected: true,
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

    case SUBMIT_DONE_TO_FALSE:
      return {
        ...state,
        formSubmitDone: false,
      };

    case CHANGE_LANDING_PAGE_FALSE:
      return {
        ...state,
        landingPage: false,
      };

    // case CHANGE_ISCONNECTED:
    //   return {
    //     ...state,
    //     isConnected: true,
    //   };

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

export const changeFormSubmitFailure = errors => ({
  type: CHANGE_FORM_SUBMIT_FAILURE,
  errors,
});

export const deleteFormErrors = () => ({
  type: DELETE_FORM_ERROR,
});

export const setRedirectErrorFormSubmit = () => ({
  type: SET_REDIRECT_ERROR_FORM_SUBMIT,
});

export const formSubmitDoneToFalse = () => ({
  type: SUBMIT_DONE_TO_FALSE,
});

export const sendRegisterForm = () => ({
  type: SUBMIT_REGISTER_FORM,
});

export const sendConnectForm = () => ({
  type: SUBMIT_CONNECT_FORM,
});

export const changeFirstName = firstName => ({
  type: CHANGE_FIRSTNAME,
  firstName,
});

export const changeLastName = lastName => ({
  type: CHANGE_LASTNAME,
  lastName,
});

export const changeEmail = email => ({
  type: CHANGE_EMAIL,
  email,
});

export const changePassword = password => ({
  type: CHANGE_PASSWORD,
  password,
});

export const resetData = () => ({
  type: RESET_DATA,
});

export const changeIsConnected = () => ({
  type: CHANGE_ISCONNECTED,
});

export const setLandingPageToFalse = () => ({
  type: CHANGE_LANDING_PAGE_FALSE,
});

// == Selectors


// == Export
export default reducer;
