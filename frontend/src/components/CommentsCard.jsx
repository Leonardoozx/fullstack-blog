function CommentsCard(comment) {
  const userId = +localStorage.getItem('userId') || '';
  return (
    <div className="comments-info-container">
      <div className="comments-info">
        <p className="comments-name">{comment.user.name}</p>
        <p>{comment.content}</p>
        <p className="comments-date">{comment.date}</p>
      </div>
      {comment.userId === userId && (
        <div className="comment-btns-container">
          <button type="button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
              alt="edit"
            />
          </button>
          <button type="button">
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
