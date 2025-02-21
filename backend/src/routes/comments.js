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

import express from 'express';
import response from '../util/response.js';
import { Comments } from '../util/db_helpers.js';

const commentsRouter = express.Router();

commentsRouter.get('/', (req, res) => {
    Comments.getAll()
        .then(comments => response(res, { comments }, 200, 'All Comments'))
        .catch(err => response(res, {}, 500, 'Failed to get comments'));
});

commentsRouter.post('/', (req, res) => {
    const { post_id, user_id, comment } = req.body;

    if (!post_id || !user_id || !comment) {
        return response(res, {}, 400, 'All fields are required');
    }

    Comments.create({ post_id, user_id, comment })
        .then(newComment => response(res, { newComment }, 201, 'Comment added'))
        .catch(err => response(res, {}, 500, 'Failed to add comment'));
});

export default commentsRouter;
