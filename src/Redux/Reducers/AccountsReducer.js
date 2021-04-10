import {
  REQUEST_MENUS,
  GET_MENUS_DATA,
  REQUEST_FAILED,
  SELECT_ACCOUNT,
} from '../Actions/AccountsActions';

const INITIAL_STATE = {
  error: '',
  menus: [],
  selectedAccount: { accountId: 0, subMenuId: 0, name: '' },
  isFetching: true,
};

export default function AccountsReducer(state = INITIAL_STATE, {
  type,
  menus,
  error,
  selectedAccount,
}) {
  switch (type) {
    case REQUEST_MENUS:
      return { ...state, isFetching: true };
    case GET_MENUS_DATA:
      return { ...state, menus, isFetching: false };
    case SELECT_ACCOUNT:
        return { ...state, selectedAccount };
    case REQUEST_FAILED:
      return { ...state, error };
    default:
      return state;
  }
};
