const CommentsServices = require('../services/comments.service');

class CommentsController {
  _commentsServices = new CommentsServices();

  getAllComments = async (_req, res) => {
    const { type, message } = await this._commentsServices.getAllComments();
    if (type) return res.status(400).json({ message });

    res.status(200).json(message);
  };

  postNewComment = async ({ body }, res) => {
    const { type, message } = await this._commentsServices.postNewComment(body);
    if (type) return res.status(400).json({ message })
    res.status(200).json(message);
  };

  deleteCommentById = async ({ params }, res) => {
    const { type, message } = await this._commentsServices.deleteCommentById(
      +params.id
    );
    if (type) return res.status(404).json({ message });
    res.status(204).send();
  };

  updateCommentById = async ({ params }, res) => {
    const { type, message } = await this._commentsServices.updateCommentById(
      +params.id
    );
    if (type) return res.status(404).json({ message });
    res.status(201).json(message);
  };
}
module.exports = CommentsController;
