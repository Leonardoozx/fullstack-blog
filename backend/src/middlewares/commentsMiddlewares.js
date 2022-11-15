const { Comments, User } = require('../db/models');

class CommentsMiddlewares {
  // async functions bellow
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
    if (!comment) {
      return res.status(400).json({ message: 'This comment does not exists' });
    }
    next();
  };
}

module.exports = CommentsMiddlewares;
