"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _response = _interopRequireDefault(require("../util/response.js"));
var _db_helpers = require("../util/db_helpers.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import express from 'express';
// import response from "../util/response";
// import { Comments } from "../util/db_helpers";

// const commentsRouter = express.Router();

// commentsRouter.get('/:post_id', (req, res) => {
// 	Comments.getAll(req.params.post_id)
// 		.then(comments => response(res, { comments }, 200, `Successfully fetched comments.`))
// 		.catch(err => response(res, {}, 500, `Failed to get comments for Post No. ${req.params.post_id}`));
// });

// commentsRouter.post('/:posts_id/:person_id', (req, res) => {
// 	Comments.create(req.params.posts_id, req.params.person_id, req.body.text)
// 		.then(comments => response(res, { comments }, 200, 'Successfully created comment'))
// 		.catch(err => response(res, {}, 500, 'Failed to create comment.'))
// });

// commentsRouter.put('/:comment_id/:posts_id', (req, res) => {
// 	Comments.update(req.params.posts_id, req.params.comment_id, req.body.text)
// 		.then(comments => response(res, { comments }, 200, 'Successfully updated comment'))
// 		.catch(err => response(res, {}, 500, 'Failed to update comment.'));
// });

// commentsRouter.delete('/:comment_id/:posts_id', (req, res) => {
// 	Comments.delete(req.params.posts_id, req.params.comment_id)
// 		.then(comments => response(res, { comments }, 200, 'Successfully deleted comment'))
// 		.catch(err => response(res, {}, 500, 'Failed to delete comment.'));
// });

// export default commentsRouter;

var commentsRouter = _express["default"].Router();
commentsRouter.get('/', function (req, res) {
  _db_helpers.Comments.getAll().then(function (comments) {
    return (0, _response["default"])(res, {
      comments: comments
    }, 200, 'All Comments');
  })["catch"](function (err) {
    return (0, _response["default"])(res, {}, 500, 'Failed to get comments');
  });
});
commentsRouter.post('/', function (req, res) {
  var _req$body = req.body,
    post_id = _req$body.post_id,
    user_id = _req$body.user_id,
    comment = _req$body.comment;
  if (!post_id || !user_id || !comment) {
    return (0, _response["default"])(res, {}, 400, 'All fields are required');
  }
  _db_helpers.Comments.create({
    post_id: post_id,
    user_id: user_id,
    comment: comment
  }).then(function (newComment) {
    return (0, _response["default"])(res, {
      newComment: newComment
    }, 201, 'Comment added');
  })["catch"](function (err) {
    return (0, _response["default"])(res, {}, 500, 'Failed to add comment');
  });
});
var _default = exports["default"] = commentsRouter;