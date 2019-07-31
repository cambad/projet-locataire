// == Initial State
const initialState = {
  isConnected: true,
  visitorValue: {
    recommendationValue: 0,
    exteriorValue: 0,
    interiorValue: 0,
    contactValue: 0,
  },
  tenantForm: {
    accesibilityValue: 0,
    environnementValue: 0,
    circulationValue: 0,
    exteriorValue: 0,
    interiorValue: 0,
    isolationValue: 0,
    cleanlinessValue: 0,
    lightValue: 0,
    contactValue: 0,
    contactQualityValue: 0,
  },
  address: '',
  accesibilityValue: 0,
  environnementValue: 0,
  circulationValue: 0,
  exteriorValue: 0,
  interiorValue: 0,
  isolationValue: 0,
  cleanlinessValue: 0,
  lightValue: 0,
  contactValue: 0,
  contactQualityValue: 0,
  recommendationValue: 0,
  isVisiteur: false,
  isLocataire: false,
  isDisplayed: false,
};

// == Types
const CHANGE_IS_LOCATAIRE = 'CHANGE_IS_LOCATAIRE';
const CHANGE_IS_VISITEUR = 'CHANGE_IS_VISITEUR';
const CHANGE_ADDRESS_INPUT = 'CHANGE_ADDRESS_INPUT';
const VISITOR_STARS = 'VISITOR_STARS';

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

    case CHANGE_ADDRESS_INPUT:
      return {
        ...state,
        address: action.address,
      };

    case VISITOR_STARS:
      return {
        ...state,
        visitorValue: {
          ...state.visitorValue,
          [action.name]: action.stars,
        },
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

export const changeAddressInput = address => ({
  type: CHANGE_ADDRESS_INPUT,
  address,
});

export const visitorStars = (stars, name) => ({
  type: VISITOR_STARS,
  stars,
  name,
});

// == Selectors


// == Export
export default reducer;
