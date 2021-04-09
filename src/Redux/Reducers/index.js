import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
// import MessagesReducer from './MessagesReducer';

const rootReducer = combineReducers({
  LoginReducer,
  // MessagesReducer,
});

export default rootReducer;
