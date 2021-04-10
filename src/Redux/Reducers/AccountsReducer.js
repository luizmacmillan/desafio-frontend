import {
  REQUEST_MENUS,
  GET_MENUS_DATA,
  REQUEST_FAILED,
} from '../Actions/AccountsActions';

const INITIAL_STATE = {
  error: '',
  menus: [],
  isFetching: true,
};

export default function AccountsReducer(state = INITIAL_STATE, {
  type,
  menus,
  error,
}) {
  switch (type) {
    case REQUEST_MENUS:
      return { ...state, isFetching: true };
    case GET_MENUS_DATA:
      return { ...state, menus, isFetching: false };
    case REQUEST_FAILED:
      return { ...state, error };
    default:
      return state;
  }
};
