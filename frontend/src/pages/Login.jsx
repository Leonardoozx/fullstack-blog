import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginEmailInput from '../components/LoginEmailInput';
import LoginPasswordInput from '../components/LoginPasswordInput';
import context from '../context/context';
import { loginPostRequest } from '../service/loginRequests';
import DoesUserExistMessage from '../components/DoesUserExistMessage';
import LoginButton from '../components/LoginButton';
import SignUpButton from '../components/SignUpButton';

function Login() {
  const {
    genericState,
    setUserDoesNotExist,
    userDoesNotExist,
    wrongPassword,
    setWrongPassword,
    setLoading,
  } = useContext(context);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginPostRequest(
        genericState.loginEmail,
        genericState.loginPassword
      );
      navigate('/feed');
    } catch ({ response }) {
      if (response.data.message === 'User does not exists') {
        setUserDoesNotExist(true);
        setWrongPassword(false);
        setLoading(false);
        return;
      }
      setWrongPassword(true);
      setLoading(false);
    }
  };
  return (
    <div className="login-container">
      <form className="login-form-container" onSubmit={handleLoginSubmit}>
        <header>Welcome!</header>
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
        <LoginButton />
        <SignUpButton loginPage={true} />
      </form>
    </div>
  );
}

export default Login;
