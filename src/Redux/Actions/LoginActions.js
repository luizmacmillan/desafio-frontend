export const SAVE_LOGIN = 'SAVE_LOGIN';

export const saveLoginAction = ({ email, password }) => ({
  type: SAVE_LOGIN,
  email,
  password,
});
