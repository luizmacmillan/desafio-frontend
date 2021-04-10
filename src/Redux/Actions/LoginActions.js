export const SAVE_LOGIN = 'SAVE_LOGIN';
export const AUTHENTICATION = 'AUTHENTICATION';

export const saveLoginAction = ({ user, password, userName }) => ({
  type: SAVE_LOGIN,
  user,
  password,
  userName,
});

export const authenticationAction = (authentication) => ({
  type: AUTHENTICATION,
  authentication,
});
