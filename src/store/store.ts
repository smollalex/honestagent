import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ThunkMiddleware from 'redux-thunk';
import { CompanyReducer, ContactReducer } from './reducers';

const reducers = combineReducers({
  company: CompanyReducer,
  contacts: ContactReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(ThunkMiddleware)));
