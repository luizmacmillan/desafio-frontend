export const REQUEST_MENUS = 'REQUEST_MENUS';
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const GET_MENUS_DATA = 'GET_MENUS_DATA';
export const GET_MESSAGES_DATA = 'GET_MESSAGES_DATA';

export const getMenusData = ({ menus }) => ({
  type: GET_MENUS_DATA,
  menus,
});

export const requestMenus = () => ({
  type: REQUEST_MENUS,
});

export const getMessagesData = ({ menus }) => ({
  type: GET_MESSAGES_DATA,
  menus,
});

export const requestMessages = () => ({
  type: REQUEST_MESSAGES,
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});
