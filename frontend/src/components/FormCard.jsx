import { useContext } from 'react';
import context from '../context/context';

function FormCard() {
  const { genericState, setGenericState, username } = useContext(context);

  const handleSubmitClick = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="form-container"
      onSubmit={handleSubmitClick}
      id="share-form"
    >
      <div id="form-info-container">
        <div>
          <p>{username || localStorage.getItem('username')}</p>
          <textarea
            name="comment"
            placeholder="Share something cool that happenned in your day... :)"
            onChange={setGenericState}
            value={genericState.comment}
            maxLength={140}
          />
          <button type="submit">Share</button>
        </div>
      </div>
    </form>
  );
}

export default FormCard;
