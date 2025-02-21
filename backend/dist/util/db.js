"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mysql = _interopRequireDefault(require("mysql"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Enter your user and password for the database
var connectionConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Selvayamini@1501',
  database: 'social_media'
  // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
};
var connection = _mysql["default"].createConnection(connectionConfig);
var _default = exports["default"] = connection;