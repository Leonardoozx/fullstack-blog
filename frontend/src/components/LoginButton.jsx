import { useContext } from 'react';
import context from '../context/context';
import verifyEmail from '../utils/verifyEmail';

function LoginButton({ message }) {
  const { genericState } = useContext(context);
  return (
    <button
      disabled={
        message === 'Create account'
          ? verifyEmail(genericState.loginEmail) ||
            genericState.signUpName.length < 1 ||
            genericState.loginPassword.length < 1 ||
            genericState.loginEmail.length < 1
          : verifyEmail(genericState.loginEmail) ||
            genericState.loginPassword.length < 1 ||
            genericState.loginEmail.length < 1
      }
      type="submit"
    >
      {message}
    </button>
  );
}

export default LoginButton;
