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

import express from 'express';
import response from '../util/response.js';
import { Posts } from '../util/db_helpers.js';

const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    Posts.getAll()
        .then(posts => response(res, { posts }, 200, 'All Posts'))
        .catch(err => response(res, {}, 500, 'Failed to get posts'));
});

postsRouter.get('/:id', (req, res) => {
    Posts.get(req.params.id)
        .then(post => response(res, { post }, 200, `Post ${req.params.id}`))
        .catch(err => response(res, {}, 500, 'Failed to get post'));
});

postsRouter.post('/', (req, res) => {
    let post = {
        text: req.body.text,
        person_id: req.body.person_id,
        image_url: req.body.image_url || null,
    };

    Posts.create(post)
        .then(newPost => response(res, { newPost }, 201, 'Post created successfully'))
        .catch(err => response(res, {}, 500, 'Failed to create post'));
});

postsRouter.delete('/:id', (req, res) => {
    Posts.delete(req.params.id)
        .then(() => response(res, {}, 200, 'Post deleted successfully'))
        .catch(err => response(res, {}, 500, 'Failed to delete post'));
});

export default postsRouter;
