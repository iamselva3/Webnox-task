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
// import response from '../util/response';
// import {Posts} from '../util/db_helpers';
// const postsRouter = express.Router();

// // Define your routes properly
// router.get('/', (req, res) => {
//   res.json({ message: 'Posts fetched successfully' });
// });

// module.exports = router;  // ✅ Ensure router is exported properly

// postsRouter.get('/', (req, res) => {
// 	Posts.getAll()
// 		.then(posts => response(res, {posts}, 200, 'All Posts'))
// 		.catch(err => response(res, {}, 500, 'Failed to get all posts'));
// });

// postsRouter.get('/:id', (req, res) => {
// 	Posts.get(req.params.id)
// 		.then(post => response(res, {post}, 200, `Retrieved Post number ${req.params.id}`))
// 		.catch(err => response(res, {}, 500, 'Failed to get post'));
// });

// postsRouter.post('/', (req, res) => {

// 	let post = {};
// 	if(req.file) {
// 		post.image_url = 'http://localhost:4000/'+req.file.path;
// 	}
// 	else if(req.body.image_url) {
// 		post.image_url = req.body.image_url;
// 	}
// 	post.text = req.body.text;
// 	post.person_id = 1;

// 	Posts.create(post)
// 		.then(feed => response(res, {feed}, 200, `Successfully created new post.`))
// 		.catch(err => response(res, {}, 500, 'Failed to create post'));
// });

// postsRouter.put('/:id', (req, res) => {
// 	Posts.update(req.params.id, req.body)
// 		.then(updatedPost => response(res, {post: updatedPost}, 200, 'Successfully updated the post'))
// 		.catch(err => response(res, {}, 500, 'Failed to update the post.'))
// });

// postsRouter.delete('/:id', (req, res) => {
// 	Posts.delete(req.params.id)
// 		.then(feed => response(res, {feed}, 200, 'Successfully deleted the post'))
// 		.catch(err => response(res, {}, 500, 'Failed to delete the post'));
// });

// export default postsRouter;

var postsRouter = _express["default"].Router();
postsRouter.get('/', function (req, res) {
  _db_helpers.Posts.getAll().then(function (posts) {
    return (0, _response["default"])(res, {
      posts: posts
    }, 200, 'All Posts');
  })["catch"](function (err) {
    return (0, _response["default"])(res, {}, 500, 'Failed to get posts');
  });
});
postsRouter.get('/:id', function (req, res) {
  _db_helpers.Posts.get(req.params.id).then(function (post) {
    return (0, _response["default"])(res, {
      post: post
    }, 200, "Post ".concat(req.params.id));
  })["catch"](function (err) {
    return (0, _response["default"])(res, {}, 500, 'Failed to get post');
  });
});
postsRouter.post('/', function (req, res) {
  var post = {
    text: req.body.text,
    person_id: req.body.person_id,
    image_url: req.body.image_url || null
  };
  _db_helpers.Posts.create(post).then(function (newPost) {
    return (0, _response["default"])(res, {
      newPost: newPost
    }, 201, 'Post created successfully');
  })["catch"](function (err) {
    return (0, _response["default"])(res, {}, 500, 'Failed to create post');
  });
});
postsRouter["delete"]('/:id', function (req, res) {
  _db_helpers.Posts["delete"](req.params.id).then(function () {
    return (0, _response["default"])(res, {}, 200, 'Post deleted successfully');
  })["catch"](function (err) {
    return (0, _response["default"])(res, {}, 500, 'Failed to delete post');
  });
});
var _default = exports["default"] = postsRouter;