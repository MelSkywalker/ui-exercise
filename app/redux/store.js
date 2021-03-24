import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import emailsReducer from './reducers';

const store = createStore(emailsReducer, composeWithDevTools());

export default store;
