import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../Components/Input';
import { saveLoginAction } from '../Redux/Actions/LoginActions';

const Login = ({ dispatchLogin }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const handleSubmit = (dispatchLogin) => {
    const loginData = { email: loginEmail, password: loginPassword };

    dispatchLogin(loginData);

  };

  return (
    <div>
      <Input
        name="E-mail"
        stateValue={ loginEmail }
        id="login-email"
        setStateValue={ setLoginEmail }
      />
      <Input
        type="password"
        name="Senha"
        stateValue={ loginPassword }
        id="login-password"
        setStateValue={ setLoginPassword }
      />
      <Link to="/main-page">
        <button type="button" onClick={ () => handleSubmit(dispatchLogin) }>
          Login
        </button>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (saveLogin) => dispatch(saveLoginAction(saveLogin)),
});

export default connect(null, mapDispatchToProps)(Login);
