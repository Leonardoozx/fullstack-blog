import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginEmailInput from '../components/LoginEmailInput';
import LoginPasswordInput from '../components/LoginPasswordInput';
import context from '../context/context';
import { loginPostRequest } from '../service/loginRequests';
import DoesUserExistMessage from '../components/DoesUserExistMessage';

function Login() {
  const {
    genericState,
    setUserDoesNotExist,
    userDoesNotExist,
    wrongPassword,
    setWrongPassword,
  } = useContext(context);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginPostRequest(
        genericState.loginEmail,
        genericState.loginPassword
      );
      navigate('/feed');
    } catch ({ response }) {
      if (response.data.message === 'User does not exist')
        return setUserDoesNotExist(true);
      setWrongPassword(true);
    }
  };
  return (
    <div className="login-container">
      <form className="login-form-container" onSubmit={handleLoginSubmit}>
        <header>Wellcome!</header>
        <LoginEmailInput />
        <LoginPasswordInput />
        {!wrongPassword ? (
          <DoesUserExistMessage
            doesUserExist={userDoesNotExist}
            path="signUp"
            message="Unknown email, do you wanna "
          />
        ) : (
          <p>Wrong password</p>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
