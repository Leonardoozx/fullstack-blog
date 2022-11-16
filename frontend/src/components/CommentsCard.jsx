import { useContext } from 'react';
import context from '../context/context';
import { deleteCommentById } from '../service/commentsRequests';

function CommentsCard(comment) {
  const { setHasNewComments, setWillEdit, setGenericState, setCommentId } =
    useContext(context);

  const userId = +localStorage.getItem('userId') || '';

  const handleDeleteClick = async () => {
    await deleteCommentById(comment.id);
    setHasNewComments((prevValue) => (prevValue += 1));
  };

  const handleEditClick = async () => {
    setCommentId(comment.id);
    setGenericState({ target: { name: 'comment', value: comment.content } });
    setWillEdit(true);
  };
  return (
    <div className="comments-info-container">
      <div className="comments-info">
        <p className="comments-name">{comment.user.name}</p>
        <p>{comment.content}</p>
        <p className="comments-date">{comment.date}</p>
      </div>
      {comment.userId === userId && (
        <div className="comment-btns-container">
          <button onClick={handleEditClick} type="button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
              alt="edit"
            />
          </button>
          <button onClick={handleDeleteClick} type="button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1799/1799391.png"
              alt="delete"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentsCard;
