import { useContext } from 'react';
import context from '../context/context';
import verifyEmail from '../utils/verifyEmail';

function LoginButton() {
  const { genericState, loading } = useContext(context);
  return (
    <button
      disabled={
        verifyEmail(genericState.loginEmail) ||
        genericState.loginPassword.length < 1 ||
        genericState.loginEmail.length < 1
      }
      type="submit"
    >
      {loading ? 'Loading...' : 'Login'}
    </button>
  );
}

export default LoginButton;
