const express = require('express');

const CommentsController = require('../controller/comments.controller');
const CommentsMiddlewares = require('../middlewares/commentsMiddlewares');

const router = express.Router();

const commentsMiddlewares = new CommentsMiddlewares();
const commentsController = new CommentsController();

router.get('/', commentsController.getAllComments);
router.post(
  '/',
  commentsMiddlewares.postNewCommentMiddleware,
  commentsController.postNewComment
);
router.put(
  '/:id',
  commentsMiddlewares.updateAndDeleteCommentMiddleware,
  commentsController.updateCommentById
);
router.delete(
  '/:id',
  commentsMiddlewares.updateAndDeleteCommentMiddleware,
  commentsController.deleteCommentById
);

module.exports = router;
