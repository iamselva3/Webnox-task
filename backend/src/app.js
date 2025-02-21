// import http from 'http';
// import path from 'path';
// import express from 'express';
// import logger from 'morgan';
// import postsRouter from './routes/posts';
// import commentsRouter from './routes/comments';
// import {toggleLike, getLike} from './routes/like';
// import feedRouter from './routes/feed';
// import bodyParser from 'body-parser';
// import db from './util/db';
// import multer from 'multer';
// import SocketIO from 'socket.io';

// const app = express();

// const storage = multer.diskStorage({
// 	destination: './public/images/uploads',
// 	filename: (req, file, cb) => {
// 		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
// 	}
// });

// const io = new SocketIO();
// io.on('connection', (client) => {
// 	client.on('click_like', function(data) {
// 		toggleLike(data, client);
// 	});
// });
// io.listen(8000);

// app.use( bodyParser.json() );       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
// 	extended: true
// }));

// app.use(logger('dev'));

// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });

// const upload = multer({storage: storage}).single('post_file');

// app.use('/feed', feedRouter);
// app.use('/posts', upload, postsRouter);
// app.use('/comments', commentsRouter);

// app.get('/public/images/uploads/:image_name', (req, res) => {
// 	res.sendFile(path.resolve(__dirname+'/../public/images/uploads/'+req.params.image_name));
// });

// // Connect to MySQL on start
// db.connect(function(err) {
// 	if (err) {
// 		console.log('Unable to connect to MySQL.\n'+err);
// 		process.exit(1)
// 	} else {
// 		http.createServer(app).listen(4000, function() {
// 			console.log('Express server started on port 4000...')
// 		})
// 	}
// });

// 

// import express from 'express';
// import cors from 'cors';
// import morgan from 'morgan';
// import bodyParser from 'body-parser';
// import feedRouter from './routes/feed.js';
// import postsRouter from './routes/posts.js';
// import commentsRouter from './routes/comments.js';

// const app = express();

// // Middleware
// app.use(cors());
// app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Routes
// app.use('/feed', feedRouter);
// app.use('/posts', postsRouter);
// app.use('/comments', commentsRouter);

// // Default Route
// app.get('/', (req, res) => {
//     res.send('Welcome to Social Media API');
// });

// // Start Server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2';
import feedRouter from './routes/feed.js';
import postsRouter from './routes/posts.js';
import commentsRouter from './routes/comments.js';

// Get __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change if needed
    password: '', // Change if needed
    database: 'social_media' // Change if needed
});

db.connect((err) => {
    if (err) {
        console.error('Unable to connect to MySQL:', err);
        process.exit(1);
    } else {
        console.log('✅ Connected to MySQL Database');
    }
});

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // Replaces bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded()

// File Upload Setup
const storage = multer.diskStorage({
    destination: './public/images/uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage }).single('post_file');

// Routes
app.use('/feed', feedRouter);
app.use('/posts', upload, postsRouter);
app.use('/comments', commentsRouter);

// Serve Uploaded Images
app.use('/public/images/uploads', express.static(path.join(__dirname, 'public/images/uploads')));

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to the Social Media API');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
