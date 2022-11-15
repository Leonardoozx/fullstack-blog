const { Comments, User } = require('../db/models');

class CommentsServices {
  _formatedDate = new Date().toLocaleString().split(', ').join(' ');

  // async function bellow
  getAllComments = () =>
    Comments.findAll({
      include: { model: User, as: 'user', attributes: ['name', 'email'] },
      attributes: ['id', 'content', 'date', 'userId'],
    });

  postNewComment = async ({ content, userId }) => {
    const insertedComment = await Comments.create({
      content,
      userId,
      date: this._formatedDate,
    });
    return { message: insertedComment };
  };

  updateCommentById = async ({ content }, id) => {
    await Comments.update(
      { content, date: this._formatedDate },
      { where: { id } }
    );
    return { message: 'Updated with success' };
  };

  deleteCommentById = async (id) => {
    await Comments.destroy({ where: { id } });
    return { message: 'Comment deleted with success' };
  };
}

module.exports = CommentsServices;
