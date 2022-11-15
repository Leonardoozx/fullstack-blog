import { useContext } from 'react';
import context from '../context/context';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';

function LoginPasswordInput() {
  const { genericState, setGenericState } = useContext(context);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <input
        name="loginPassword"
        value={genericState.loginPassword}
        onChange={setGenericState}
        type={ showPassword ? 'text': 'password' }
        placeholder="Type your passw***"
      />

      <button
        type="button"
        style={{
          backgroundColor: 'transparent',
          backgroundRepeat: 'no-repeat',
          border: 'none',
          color: 'black',
          position: 'relative',
          right: '30px',
        }}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </>
  );
}

export default LoginPasswordInput;
