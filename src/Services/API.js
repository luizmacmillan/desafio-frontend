import {
  requestFailed,
  requestMenus,
  getMenusData,
} from '../Redux/Actions/AccountsActions';

const getAccountData = async (id) => {
  const endpoint = `http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/items/${id}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
const updateToCompleteData = async (data) => {
  const completeData = [];
  let updatedMenu = [];

  for (const menu of data) {
    for (const subMenu of menu.subMenus) {
      const response = await getAccountData(subMenu.id);
      subMenu.subMenuItems = response.subMenuItems;
      updatedMenu.push(subMenu);
    }
    menu.subMenus = updatedMenu;
    completeData.push(menu);
    updatedMenu = [];
  }

  return completeData;
};

const getAccountsMenus = () => {
  const endpoint = 'http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/menus';

  return async (dispatch) => {
    dispatch(requestMenus());
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const completeData = await updateToCompleteData(data);

      dispatch(getMenusData(completeData));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

const API = {
  getAccountsMenus,
  getAccountData,
};

export default API;
