import { useContext } from 'react';
import LoginEmailInput from '../components/LoginEmailInput';
import LoginPasswordInput from '../components/LoginPasswordInput';
import DoesUserExistMessage from '../components/DoesUserExistMessage';
import context from '../context/context';
import { signUpPostRequest } from '../service/loginRequests';
import { useNavigate } from 'react-router-dom';
import SignUpButton from '../components/SignUpButton';

function SignUp() {
  const {
    genericState,
    setGenericState,
    doesUserExist,
    setDoesUserExist,
    setLoading,
  } = useContext(context);

  const navigate = useNavigate();

  const handleSignUpClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { id, message } = await signUpPostRequest(
      genericState.signUpName,
      genericState.loginEmail,
      genericState.loginPassword
    );
    if (message && message.includes('400')) {
      setLoading(false);
      setDoesUserExist(true);
      return;
    }
    localStorage.setItem('username', genericState.signUpName);
    localStorage.setItem('userId', id);
    navigate('/feed');
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
        <SignUpButton loginPage={false} />
      </form>
    </div>
  );
}

export default SignUp;
