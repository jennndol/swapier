import thunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import people from '../reducers/people';

const store = combineReducers({
  people
});

export default createStore(store, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk));