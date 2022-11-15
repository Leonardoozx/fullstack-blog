const CommentsServices = require('../services/comments.service');

class CommentsController {
  _commentsServices = new CommentsServices();

  getAllComments = async (_req, res) => {
    const allComments = await this._commentsServices.getAllComments();
    res.status(200).json(allComments);
  };

  postNewComment = async ({ body }, res) => {
    const { message } = await this._commentsServices.postNewComment(body);
    res.status(201).json(message);
  };

  deleteCommentById = async ({ params }, res) => {
    const message = await this._commentsServices.deleteCommentById(+params.id);
    res.status(204).json(message);
  };

  updateCommentById = async ({ body, params }, res) => {
    const message = await this._commentsServices.updateCommentById(
      body,
      +params.id
    );
    res.status(200).json(message);
  };
}
module.exports = CommentsController;
