function CommentsCard(comment) {
  console.log(comment)
  const user = { email: '' };
  return (
    <div className="comments-container" key={comment.id}>
      <div className="comment-info-container">
        <p>{comment.user.name}</p>
        <p>{comment.content}</p>
        <p className="comment-date">{comment.date}</p>
      </div>
      {comment.user.email === user.email &&
        (<div className="comment-btns-container">
          <button type="button">edit</button>
          <button type="button">delete</button>
        </div>)
      }
    </div>
  )
}

export default CommentsCard;