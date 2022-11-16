import { useContext } from 'react';
import context from '../context/context';

function LoginPasswordInput() {
  const { genericState, setGenericState, setWrongPassword } =
    useContext(context);

  const onPasswordChange = (e) => {
    setGenericState(e);
    setWrongPassword(false);
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
