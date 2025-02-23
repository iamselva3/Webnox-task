"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Posts = exports.Feed = exports.Comments = void 0;
var _promise = _interopRequireDefault(require("mysql2/promise"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // import db from './db';
// export const Posts = {
// 	getAll: () => {
// 		return new Promise((resolve, reject) => {
// 			db.query('SELECT * FROM Posts', (err, rows) => {
// 				if(err) {
// 					reject(err);
// 				}
// 				resolve(rows);
// 			});
// 		});
// 	},
// 	get: (id) => {
// 		return new Promise((resolve, reject) => {
// 			db.query(`SELECT * FROM Posts WHERE id = ${id}`, (err, rows) => {
// 				if(err) {
// 					reject(err);
// 				}
// 				resolve(rows[0]);
// 			});
// 		});
// 	},
// 	create: (post) => {
// 		return new Promise((resolve, reject) => {
// 			db.query(`INSERT INTO Posts SET ?`, post, (err, rows) => {
// 				if(err) {
// 					console.log(err);
// 					reject(err);
// 				}
// 				resolve(Feed.getAll());
// 			});
// 		});
// 	},
// 	update: (id, post) => {
// 		return new Promise((resolve, reject) => {
// 			db.query(`UPDATE Posts SET ? WHERE id = ?`,[post,id], (err, rows) => {
// 				if(err) {
// 					console.log(err);
// 					reject(err);
// 				}
// 				resolve(Posts.get(id));
// 			});
// 		});
// 	},
// 	delete: (id) => {
// 		return new Promise((resolve, reject) => {
// 			db.query(`DELETE FROM Posts WHERE id = ${id}`, (err, rows) => {
// 				if(err) {
// 					console.log(err);
// 					reject(err);
// 				}
// 				resolve(Feed.getAll());
// 			})
// 		});
// 	}
// };
// export const Comments = {
// 	getAll: (posts_id) => {
// 		return new Promise((resolve, reject) => {
// 			db.query('SELECT * FROM Comments where posts_id IN (?)', [posts_id], (err, rows) => {
// 				if(err) {
// 					reject(err);
// 				}
// 				resolve(rows);
// 			});
// 		});
// 	},
// 	get: (post_id) => {
// 		return new Promise((resolve, reject) => {
// 			db.query('SELECT * FROM Comments where posts_id = ?', post_id, (err, rows) => {
// 				if(err) {
// 					reject(err);
// 				}
// 				resolve(rows);
// 			});
// 		});
// 	},
// 	create: (posts_id, person_id, text) => {
// 		let comment = {posts_id, person_id, text};
// 		return new Promise((resolve, reject) => {
// 			db.query(`INSERT INTO Comments SET ?`, comment, (err, rows) => {
// 				if(err) {
// 					console.log(err);
// 					reject(err);
// 				}
// 				resolve(Comments.get(posts_id));
// 			});
// 		});
// 	},
// 	update: (posts_id, id, text) => {
// 		let comment = { text };
// 		return new Promise((resolve, reject) => {
// 			db.query(`UPDATE Comments SET ? WHERE id = ? AND posts_id = ?`,[comment, id, posts_id], (err, rows) => {
// 				if(err) {
// 					console.log(err);
// 					reject(err);
// 				}
// 				resolve(Comments.getAll(posts_id));
// 			});
// 		});
// 	},
// 	delete: (posts_id, id) => {
// 		return new Promise((resolve, reject) => {
// 			db.query(`DELETE FROM Comments WHERE posts_id = ? AND id = ?`, [posts_id, id], (err, rows) => {
// 				if(err) {
// 					console.log(err);
// 					reject(err);
// 				}
// 				resolve(Comments.getAll(posts_id));
// 			})
// 		});
// 	}
// };
// export const Likes = {
// 	getAll: (posts_id) => {
// 		return new Promise((resolve, reject) => {
// 			db.query(`SELECT * FROM Likes WHERE posts_id IN (?)`, [posts_id], (err, rows) => {
// 				if(err) {
// 					console.log(err);
// 					reject(err);
// 				}
// 				resolve(rows);
// 			})
// 		});
// 	},
// 	get: (posts_id, person_id) => {
// 		return new Promise((resolve, reject) => {
// 			db.query(`SELECT * FROM Likes WHERE posts_id = ? AND person_id = ?`, [posts_id, person_id], (err, rows) => {
// 				if(err) {
// 					console.log(err);
// 					reject(err);
// 				}
// 				resolve(rows);
// 			})
// 		});
// 	},
// 	remove: (posts_id, person_id) => {
// 		return new Promise((resolve, reject) => {
// 			db.query(`DELETE FROM Likes WHERE posts_id = ? AND person_id = ?`, [posts_id, person_id], (err, rows) => {
// 				if(err) {
// 					console.log(err);
// 					reject(err);
// 				}
// 				resolve(rows);
// 			})
// 		});
// 	},
// 	insert: (posts_id, person_id) => {
// 		return new Promise((resolve, reject) => {
// 			db.query(`INSERT INTO Likes SET ?`, {posts_id, person_id}, (err, rows) => {
// 				if(err) {
// 					console.log(err);
// 					reject(err);
// 				}
// 				resolve(rows);
// 			})
// 		});
// 	},
// 	toggle: (posts_id, person_id) => {
// 		return new Promise((resolve, reject) => {
// 			let liked = false;
// 			Likes.get(posts_id, person_id)
// 				.then(data => {
// 					if (data.length) {
// 						liked = false;
// 						return Likes.remove(posts_id, person_id);
// 					}
// 					liked = true;
// 					return Likes.insert(posts_id, person_id);
// 				})
// 				.then(() => resolve({liked}))
// 				.catch(err => reject(err));
// 		});
// 	},
// };
// export const Feed = {
// 	getAll: () => {
// 		return new Promise((resolve, reject) => {
// 			let posts = [], comments = [], likes = [], posts_id = [];
// 			Posts.getAll()
// 				.then(db_posts => {
// 					posts = db_posts;
// 					if(posts.length) {
// 						posts_id = posts.map(post => post.id);
// 						return Comments.getAll(posts_id);
// 					}
// 					resolve([]);
// 					throw new Error('No posts');
// 				})
// 				.then(db_comments => {
// 					comments = db_comments;
// 					return Likes.getAll(posts_id);
// 				})
// 				.then(db_likes => {
// 					likes = db_likes;
// 					let feeds = [];
// 					posts.forEach(post => {
// 						let new_feed = {};
// 						new_feed.post = post;
// 						new_feed.post.comments = comments.filter(comment => comment.posts_id === post.id);
// 						new_feed.post.likes = likes.filter(like => like.posts_id === post.id);
// 						feeds.push(new_feed);
// 					});
// 					const sortedFeeds = feeds.sort((feed1, feed2) => new Date(feed1.post.created_at).getTime() < new Date(feed2.post.created_at).getTime());
// 					resolve(sortedFeeds);
// 				})
// 				.catch(err => reject(err));
// 		});
// 	}
// };
var pool = _promise["default"].createPool({
  host: 'localhost',
  user: 'root',
  password: 'Selvayamini@1501',
  database: 'social_media',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
var Posts = exports.Posts = {
  getAll: function () {
    var _getAll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$pool$query, _yield$pool$query2, rows;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return pool.query('SELECT * FROM posts');
          case 2:
            _yield$pool$query = _context.sent;
            _yield$pool$query2 = _slicedToArray(_yield$pool$query, 1);
            rows = _yield$pool$query2[0];
            return _context.abrupt("return", rows);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function getAll() {
      return _getAll.apply(this, arguments);
    }
    return getAll;
  }(),
  get: function () {
    var _get = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
      var _yield$pool$query3, _yield$pool$query4, rows;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return pool.query('SELECT * FROM posts WHERE id = ?', [id]);
          case 2:
            _yield$pool$query3 = _context2.sent;
            _yield$pool$query4 = _slicedToArray(_yield$pool$query3, 1);
            rows = _yield$pool$query4[0];
            return _context2.abrupt("return", rows[0]);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function get(_x) {
      return _get.apply(this, arguments);
    }
    return get;
  }(),
  create: function () {
    var _create = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(post) {
      var _yield$pool$query5, _yield$pool$query6, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return pool.query('INSERT INTO posts SET ?', post);
          case 2:
            _yield$pool$query5 = _context3.sent;
            _yield$pool$query6 = _slicedToArray(_yield$pool$query5, 1);
            result = _yield$pool$query6[0];
            return _context3.abrupt("return", _objectSpread({
              id: result.insertId
            }, post));
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function create(_x2) {
      return _create.apply(this, arguments);
    }
    return create;
  }(),
  "delete": function () {
    var _delete2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return pool.query('DELETE FROM posts WHERE id = ?', [id]);
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    function _delete(_x3) {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }()
};
var Comments = exports.Comments = {
  getAll: function () {
    var _getAll2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _yield$pool$query7, _yield$pool$query8, rows;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return pool.query('SELECT * FROM comments');
          case 2:
            _yield$pool$query7 = _context5.sent;
            _yield$pool$query8 = _slicedToArray(_yield$pool$query7, 1);
            rows = _yield$pool$query8[0];
            return _context5.abrupt("return", rows);
          case 6:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    function getAll() {
      return _getAll2.apply(this, arguments);
    }
    return getAll;
  }(),
  create: function () {
    var _create2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(comment) {
      var _yield$pool$query9, _yield$pool$query10, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return pool.query('INSERT INTO comments SET ?', comment);
          case 2:
            _yield$pool$query9 = _context6.sent;
            _yield$pool$query10 = _slicedToArray(_yield$pool$query9, 1);
            result = _yield$pool$query10[0];
            return _context6.abrupt("return", _objectSpread({
              id: result.insertId
            }, comment));
          case 6:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    function create(_x4) {
      return _create2.apply(this, arguments);
    }
    return create;
  }()
};
var Feed = exports.Feed = {
  getAll: function () {
    var _getAll3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var _yield$pool$query11, _yield$pool$query12, rows;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return pool.query('SELECT * FROM feed');
          case 2:
            _yield$pool$query11 = _context7.sent;
            _yield$pool$query12 = _slicedToArray(_yield$pool$query11, 1);
            rows = _yield$pool$query12[0];
            return _context7.abrupt("return", rows);
          case 6:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    function getAll() {
      return _getAll3.apply(this, arguments);
    }
    return getAll;
  }()
};