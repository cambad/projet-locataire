// == Initial State
const initialState = {
  isConnected: true,
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
const RECOMMENDATION_STARS = 'RECOMMENDATION_STARS';
const EXTERIOR_STARS = 'EXTERIOR_STARS';
const INTERIOR_STARS = 'INTERIOR_STARS';
const CONTACT_STARS = 'CONTACT_STARS';

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

    case RECOMMENDATION_STARS:
      return {
        ...state,
        recommendationValue: action.stars,
      };

    case EXTERIOR_STARS:
      return {
        ...state,
        exteriorValue: action.stars,
      };

    case INTERIOR_STARS:
      return {
        ...state,
        interiorValue: action.stars,
      };

    case CONTACT_STARS:
      return {
        ...state,
        contactValue: action.stars,
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

export const recommendationStars = stars => ({
  type: RECOMMENDATION_STARS,
  stars,
});

export const exteriorStars = stars => ({
  type: EXTERIOR_STARS,
  stars,
});

export const interiorStars = stars => ({
  type: INTERIOR_STARS,
  stars,
});

export const contactStars = stars => ({
  type: CONTACT_STARS,
  stars,
});


// == Selectors


// == Export
export default reducer;
