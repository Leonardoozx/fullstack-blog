import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import context from '../context/context';
import verifyEmail from '../utils/verifyEmail';

function LoginButton({ loginPage }) {
  const { genericState, loading } = useContext(context);
  const navigate = useNavigate();
  return (
    <button
      onClick={loginPage ? () => navigate('/signUp') : () => {}}
      disabled={
        loginPage
          ? false
          : verifyEmail(genericState.loginEmail) ||
            genericState.signUpName.length < 1 ||
            genericState.loginPassword.length < 1 ||
            genericState.loginEmail.length < 1
      }
      type="submit"
    >
      {loading && !loginPage ? 'Loading...' : 'Create account'}
    </button>
  );
}

export default LoginButton;
