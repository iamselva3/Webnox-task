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
// import {Feed} from '../util/db_helpers';
// const feedRouter = express.Router();

// feedRouter.get('/', (req, res) => {
// 	Feed.getAll()
// 		.then(feed => response(res, {feed}, 200, 'All Feeds'))
// 		.catch(err => response(res, {}, 500, 'Failed to get all feeds'));
// });

// export default feedRouter;

var feedRouter = _express["default"].Router();
feedRouter.get('/', function (req, res) {
  _db_helpers.Feed.getAll().then(function (feed) {
    return (0, _response["default"])(res, {
      feed: feed
    }, 200, 'All Feeds');
  })["catch"](function (err) {
    return (0, _response["default"])(res, {}, 500, 'Failed to get feeds');
  });
});
var _default = exports["default"] = feedRouter;