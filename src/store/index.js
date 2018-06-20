import thunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import people from '../reducers/people';
import person from '../reducers/person';

const store = combineReducers({
  people,
  person
});

export default createStore(store, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk));