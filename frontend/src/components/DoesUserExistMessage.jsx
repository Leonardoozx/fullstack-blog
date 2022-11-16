import { Link } from 'react-router-dom';

function DoesUserExistMessage({ path, message, doesUserExist }) {
  return (
    <>
      {doesUserExist && (
        <p>
          {message}
          <Link to={`/${path}`}>
            {path === 'signUp' ? 'sign up' : 'log in'}
          </Link>
          ?
        </p>
      )}
    </>
  );
}

export default DoesUserExistMessage;
