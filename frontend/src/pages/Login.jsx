import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginEmailInput from '../components/LoginEmailInput';
import LoginPasswordInput from '../components/LoginPasswordInput';
import context from '../context/context';
import { loginPostRequest } from '../service/loginRequests';
import verifyEmail from '../utils/verifyEmail';

function Login() {
  const { genericState, setUserDoesNotExist, userDoesNotExist } =
    useContext(context);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const isUserLoggedIn = await loginPostRequest(
      genericState.loginEmail,
      genericState.loginPassword
    );
    if (isUserLoggedIn.message === 'User does not exists')
      return setUserDoesNotExist(true);
    navigate('/feed');
  };
  return (
    <div id="login-container">
      <form onSubmit={handleLoginSubmit}>
        <LoginEmailInput />
        <LoginPasswordInput />
        {userDoesNotExist && (
          <p>
            Unknown email, do you wanna <Link to="/signUp">sign up</Link>?
          </p>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
