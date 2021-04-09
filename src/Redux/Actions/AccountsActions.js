export const REQUEST_MENUS = 'REQUEST_MENUS';
export const REQUEST_ACCOUNT_DATA = 'REQUEST_ACCOUNT_DATA';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const GET_MENUS_DATA = 'GET_MENUS_DATA';
export const GET_ACCOUNT_DATA = 'GET_ACCOUNT_DATA';

export const getMenusData = (menus) => ({
  type: GET_MENUS_DATA,
  menus,
});

export const requestMenus = () => ({
  type: REQUEST_MENUS,
});

export const getMessagesData = (accountData) => ({
  type: GET_ACCOUNT_DATA,
  accountData,
});

export const requestMessages = () => ({
  type: REQUEST_ACCOUNT_DATA,
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});
