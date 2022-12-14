import { useContext } from 'react';
import context from '../context/context';
import verifyEmail from '../utils/verifyEmail';

function LoginEmailInput() {
  const {
    genericState,
    setGenericState,
    setUserDoesNotExist,
    setDoesUserExist,
  } = useContext(context);

  const handleWithLoginInput = (e) => {
    setGenericState(e);
    setUserDoesNotExist(false);
    setDoesUserExist(false);
  };
  return (
    <div className="login-email-container">
      <input
        name="loginEmail"
        value={genericState.loginEmail}
        onChange={handleWithLoginInput}
        type="text"
        placeholder="Please, type your email"
      />
      {verifyEmail(genericState.loginEmail) && <p>Please type a valid email</p>}
    </div>
  );
}

export default LoginEmailInput;
