const { Comments, User } = require('../db/models');

class CommentsMiddlewares {
  _findUserByUserId = (id) => User.findOne({ where: { id } });

  _findCommentById = (id) => Comments.findOne({ where: { id } });

  postNewCommentMiddleware = async ({ body: { userId } }, res, next) => {
    // the next 2 lines is verifying if user exists before trying to insert a comment in DB and breaking the code
    const user = await this._findUserByUserId(userId);
    if (!user) return res.status(400).json({ message: 'User does not exists' });
    next();
  };

  updateAndDeleteCommentMiddleware = async ({ params }, res, next) => {
    // verifies if the comment exists
    const comment = await this._findCommentById(+params.id);
    const user = await this._findUserByUserId(comment.userId);
    if (!comment) {
      return res.status(400).json({ message: 'This comment does not exists' });
    }
    // verifies if the user is trying to update other people comments
    if (user.id !== comment.userId) {
      return res
        .status(404)
        .json({ message: 'You can only update your own comments' });
    }
    next();
  };
}

module.exports = CommentsMiddlewares;
