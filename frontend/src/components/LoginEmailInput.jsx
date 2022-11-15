import { useContext } from 'react';
import context from '../context/context';
import verifyEmail from '../utils/verifyEmail';

function LoginEmailInput() {
  const { genericState, setGenericState, setUserDoesNotExist } = useContext(context);
  
  const handleWithLoginInput = (e) => {
    setGenericState(e);
    setUserDoesNotExist(false)
  }
  return (
    <>
      <input
        name="loginEmail"
        value={genericState.loginEmail}
        onChange={handleWithLoginInput}
        type="text"
        placeholder="Please, type your email"
      />
      {verifyEmail(genericState.loginEmail) && <p>Please type a valid email</p>}
    </>
  );
}

export default LoginEmailInput;
