import { useContext } from 'react';
import context from '../context/context';
import { postComment, updateCommentById } from '../service/commentsRequests';

function FormCard() {
  const { genericState, setGenericState, username, setHasNewComments, willEdit, setWillEdit, commentId } =
    useContext(context);

  const removeValuesFromInput = () => {
    // the function bellow is the param to setGenericState to reset the blog inputs
    const defaultTarget = (name) => ({ target: { name, value: '' } });
    setGenericState(defaultTarget('comment'));
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    if (willEdit) {
      await updateCommentById(commentId, genericState.comment);
      setWillEdit(false);
      setHasNewComments((prevValue) => prevValue + 1);
      removeValuesFromInput();
      return;
    }
    await postComment(genericState.comment, +localStorage.getItem('userId'));
    setHasNewComments((prevValue) => prevValue + 1);
    removeValuesFromInput();
    setWillEdit(false);
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
          <button type="submit">{!willEdit ? 'Share' : 'Edit'}</button>
        </div>
      </div>
    </form>
  );
}

export default FormCard;
