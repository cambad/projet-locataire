// == Import : npm
import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';

// == Import : local
import reducer from 'src/store/reducer';
import reducerMap from 'src/store/reducerMap';
import formRatingMiddleware from './formRatingMiddleware';
import registerFormMiddleware from './registerFormMiddleware';
import connectFormMiddleware from './connectFormMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(formRatingMiddleware),
  applyMiddleware(registerFormMiddleware),
  applyMiddleware(connectFormMiddleware),
);

const rootReducer = combineReducers({
  reducer,
  reducerMap,
});

const store = createStore(
  rootReducer,
  enhancers,
);

// == Export
export default store;
