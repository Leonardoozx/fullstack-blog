const { Comments, User } = require('../db/models');

class CommentsServices {
  _formatedDate = new Date().toLocaleString().split(', ').join(' ');
  // async function bellow
  getAllComments = () => Comments.findAll();

  _findUserByUserId = (id) => User.findOne({ where: { id } });

  postNewComment = async ({ content, userId }) => {
    // the next 2 lines is verifying if user exists before trying to insert a comment in DB and breaking the code
    const user = await this._findUserByUserId(userId);
    if (!user) return { type: 'ERROR', message: 'User does not exists' };

    const insertedComment = await Comments.create({
      content,
      userId,
      date: this._formatedDate,
    });
    return { type: null, message: insertedComment };
  };

  updateCommentById = async () => {

  };
}

module.exports = CommentsServices;
