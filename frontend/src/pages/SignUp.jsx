import { useContext } from 'react';
import LoginEmailInput from '../components/LoginEmailInput';
import LoginPasswordInput from '../components/LoginPasswordInput';
import DoesUserExistMessage from '../components/DoesUserExistMessage';
import context from '../context/context';
import { signUpPostRequest } from '../service/loginRequests';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../components/LoginButton';

function SignUp() {
  const { genericState, setGenericState, doesUserExist, setDoesUserExist } =
    useContext(context);

  const navigate = useNavigate();

  const handleSignUpClick = async (e) => {
    e.preventDefault();
    // const isUserLoggedIn = await signUpPostRequest(
    // genericState.loginEmail,
    // genericState.loginPassword
    // );
    await fetch('https://fullstack-blog-backend.up.railway.app/login/signUp/', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: {
        email: genericState.loginEmail,
        password: genericState.loginPassword,
        name: 'Leonardo',
      },
    }).then((x) => console.log(x.json()));

    // if (isUserLoggedIn.message === 'User already exists')
    // return setDoesUserExist(true);
    // navigate('/feed');
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSignUpClick} className="login-form-container">
        <header>Sign up for enjoying the blog :)</header>
        <input
          type="text"
          name="signUpName"
          value={genericState.signUpName}
          onChange={setGenericState}
          placeholder="Type your full name, or yosur nickname :)"
        />
        <LoginEmailInput />
        <LoginPasswordInput />
        <DoesUserExistMessage
          doesUserExist={doesUserExist}
          path="/"
          message="It seems you're already registered, do you wanna "
        />
        <LoginButton message="Create account" />
      </form>
    </div>
  );
}

export default SignUp;
