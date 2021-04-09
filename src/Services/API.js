import {
  requestFailed,
  requestMenus,
  getMenusData,
  requestMessages,
  getMessagesData,
} from '../Redux/Actions/AccountsActions';

const getAccountsSubMenus = async () => {
  const endpoint = 'http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/menus';

  return async (dispatch) => {
    dispatch(requestMenus());
    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      dispatch(getMenusData(data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

const getAccountData = async (id) => {
  const endpoint = `http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/items${id}`;

  return async (dispatch) => {
    dispatch(requestMessages());
    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      dispatch(getMessagesData(data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

const API = {
  getAccountsSubMenus,
  getAccountData,
};

export default API;
