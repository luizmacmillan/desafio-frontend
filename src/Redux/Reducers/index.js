import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import AccountsReducer from './AccountsReducer';

const rootReducer = combineReducers({
  LoginReducer,
  AccountsReducer,
});

export default rootReducer;
