const { Comments } = require('../db/models');

class CommentsServices {
  _formatedDate = new Date().toLocaleString().split(', ').join(' ');
  // async function bellow
  getAllComments = () => Comments.findAll();

  postNewComment = async ({ content, userId }) => {
    const insertedComment = await Comments.create({ content, userId, date: this._formatedDate });
    return insertedComment;
  };
}

module.exports = CommentsServices;
