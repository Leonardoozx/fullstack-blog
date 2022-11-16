import { useContext } from 'react';
import context from '../context/context';

function LoginPasswordInput() {
  const { genericState, setGenericState } = useContext(context);

  const onPasswordChange = (e) => {
    setGenericState(e);
  };
  return (
    <input
      name="loginPassword"
      value={genericState.loginPassword}
      onChange={onPasswordChange}
      type="password"
      placeholder="Type your passw***"
    />
  );
}

export default LoginPasswordInput;
