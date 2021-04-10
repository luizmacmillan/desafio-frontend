export const REQUEST_MENUS = 'REQUEST_MENUS';
export const GET_MENUS_DATA = 'GET_MENUS_DATA';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const getMenusData = (menus) => ({
  type: GET_MENUS_DATA,
  menus,
});

export const requestMenus = () => ({
  type: REQUEST_MENUS,
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});
