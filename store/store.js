import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
i;
import auth from './reducers/auth';
const middleware = [thunk];

const rootReducer = combineReducers({
  auth,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
