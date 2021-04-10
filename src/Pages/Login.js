import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Input from '../Components/Input';
import { saveLoginAction, authenticationAction } from '../Redux/Actions/LoginActions';
import validateCredentials from '../Services/ValidateCredentials';

const Login = ({ dispatchLogin, dispatchAuthentication }) => {
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [invalidUser, setInvalidUser] = useState(false);
  const history = useHistory();

  const handleSubmit = (dispatchLogin) => {
    const loginData = { user: loginUser, password: loginPassword, userName: 'Odair Alberto' };
    const userAuthentication = validateCredentials(loginUser, loginPassword);

    if (userAuthentication) {
      dispatchLogin(loginData);
      dispatchAuthentication(userAuthentication);
      setInvalidUser(false);
      history.push('/main-page');
    }
    setInvalidUser(true);
  };

  return (
    <div>
      <Input
        name="User"
        stateValue={ loginUser }
        id="login-user"
        setStateValue={ setLoginUser }
      />
      <Input
        type="password"
        name="Senha"
        stateValue={ loginPassword }
        id="login-password"
        setStateValue={ setLoginPassword }
        confirmFunction={ () => handleSubmit(dispatchLogin) }
      />
      <button type="button" onClick={ () => handleSubmit(dispatchLogin) }>
        Login
      </button>
      { invalidUser && <h2>Senha incorreta!</h2> }
    </div>
  );
};

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  dispatchAuthentication: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (saveLogin) => dispatch(saveLoginAction(saveLogin)),
  dispatchAuthentication: (authentication) => dispatch(authenticationAction(authentication)),
});

export default connect(null, mapDispatchToProps)(Login);
