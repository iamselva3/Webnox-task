"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// const response = (res, data, code, message) => {
// 	res.statusCode = code;
// 	const response = {
// 		data,
// 		message,
// 	};
// 	return res.json(response);
// };

// export default response;

var response = function response(res) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Success';
  res.status(status).json({
    status: status,
    message: message,
    data: data
  });
};
var _default = exports["default"] = response;