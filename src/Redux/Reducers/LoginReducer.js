import { SAVE_LOGIN } from '../Actions/LoginActions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function LoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_LOGIN:
    return { ...state, email: action.email, password: action.password };
  default:
    return state;
  }
};
