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
const DO_SOMETHING = 'DO_SOMETHING';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

// == Action Creators
export const doSomething = message => ({
  type: DO_SOMETHING,
  message,
});


// == Selectors


// == Export
export default reducer;
