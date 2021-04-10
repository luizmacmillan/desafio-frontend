//Mock da validação do usuário.

const validateCredentials = (user, password) => {
  if (user === 'admin' && password === 'admin') return true;
  return false;
};

export default validateCredentials;
