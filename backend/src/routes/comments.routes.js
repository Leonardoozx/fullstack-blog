const express = require('express');

const CommentsController = require('../controller/comments.controller');

const router = express.Router();

const commentsController = new CommentsController();

router.get('/', commentsController.getAllComments);
router.post('/', commentsController.postNewComment);
router.put('/:id', commentsController.updateCommentById);
router.delete('/:id', commentsController.deleteCommentById);

module.exports = router;
