// const response = (res, data, code, message) => {
// 	res.statusCode = code;
// 	const response = {
// 		data,
// 		message,
// 	};
// 	return res.json(response);
// };

// export default response;

const response = (res, data = {}, status = 200, message = 'Success') => {
    res.status(status).json({ status, message, data });
};

export default response;
