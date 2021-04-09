import {
  REQUEST_MENUS,
  REQUEST_ACCOUNT_DATA,
  GET_MENUS_DATA,
  GET_ACCOUNT_DATA,
  REQUEST_FAILED,
} from '../Actions/AccountsActions';

const INITIAL_STATE = {
  error: '',
  menus: [],
  accountData: [],
  isFetchingMenus: true,
  isFetchingMessages: true,
};

export default function AccountsReducer(state = INITIAL_STATE, {
  type,
  accountData = null,
  menus = null,
  error = null,
}) {
  switch (type) {
    case REQUEST_MENUS:
      return { ...state, isFetchingMenus: true };
    case REQUEST_ACCOUNT_DATA:
      return { ...state, isFetchingMessages: true };
    case GET_MENUS_DATA:
      return { ...state, menus, isFetchingMenus: false };
    case GET_ACCOUNT_DATA:
      return { ...state, accountData, isFetchingMessages: false };
    case REQUEST_FAILED:
      return { ...state, error };
    default:
      return state;
  }
};
