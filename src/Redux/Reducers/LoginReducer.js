import { SAVE_LOGIN, AUTHENTICATION } from '../Actions/LoginActions';

const INITIAL_STATE = {
  user: '',
  password: '',
  userName: '',
  authentication: false,
};

export default function LoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case AUTHENTICATION:
    return { ...state, authentication: action.authentication };
  case SAVE_LOGIN:
    return { ...state, user: action.user, password: action.password, userName: action.userName };
  default:
    return state;
  }
};
