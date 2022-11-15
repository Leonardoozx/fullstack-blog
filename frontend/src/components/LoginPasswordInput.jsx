import { useContext } from 'react';
import context from '../context/context';

function LoginPasswordInput() {
  const { genericState, setGenericState } = useContext(context);
  return (
    <input
      name="loginPassword"
      value={genericState.loginPassword}
      onChange={setGenericState}
      type="password"
      placeholder="Type your passw***"
    />
  );
}

export default LoginPasswordInput;
