module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _tweetList = __webpack_require__(2);

	var _tweetList2 = _interopRequireDefault(_tweetList);

	var _reactRedux = __webpack_require__(7);

	var _redux = __webpack_require__(8);

	var _createTweet = __webpack_require__(9);

	var _createTweet2 = _interopRequireDefault(_createTweet);

	var _tweetActions = __webpack_require__(12);

	var messageActionCreators = _interopRequireWildcard(_tweetActions);

	__webpack_require__(13);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_createTweet2.default, { addTweet: this.props.addTweet }),
	        _react2.default.createElement(_tweetList2.default, { tweets: this.props.tweets })
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    tweets: state.tweets
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(messageActionCreators, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TweetList = function (_Component) {
		_inherits(TweetList, _Component);

		function TweetList() {
			_classCallCheck(this, TweetList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(TweetList).apply(this, arguments));
		}

		_createClass(TweetList, [{
			key: 'getTweet',
			value: function getTweet(tweet, i) {
				return _react2.default.createElement(
					'li',
					{ key: i },
					_react2.default.createElement(
						'p',
						null,
						tweet.content
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'span',
							null,
							tweet.handle
						),
						_react2.default.createElement(
							'span',
							{ className: 'date' },
							tweet.createdAt.toLocaleString()
						)
					)
				);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					'ul',
					{ className: 'tweet-list' },
					this.props.tweets.map(function (t, i) {
						return _this2.getTweet(t, i);
					})
				);
			}
		}]);

		return TweetList;
	}(_react.Component);

	exports.default = TweetList;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CreateTweet = function (_Component) {
		_inherits(CreateTweet, _Component);

		function CreateTweet(props) {
			_classCallCheck(this, CreateTweet);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CreateTweet).call(this, props));

			_this.state = {};
			return _this;
		}

		_createClass(CreateTweet, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'create-tweet' },
					_react2.default.createElement('input', {
						ref: 'input',
						placeholder: 'Handle',
						type: 'text',
						onChange: this.handleNameChange.bind(this)
					}),
					_react2.default.createElement('textarea', {
						ref: 'textarea',
						placeholder: 'What\'s happening?',
						onChange: this.handleContentChange.bind(this)
					}),
					_react2.default.createElement(
						'a',
						{ onClick: this.handleClick.bind(this) },
						'Tweet'
					)
				);
			}
		}, {
			key: 'handleContentChange',
			value: function handleContentChange(ev) {
				this.setState({ content: ev.target.value });
			}
		}, {
			key: 'handleNameChange',
			value: function handleNameChange(ev) {
				this.setState({ handle: ev.target.value });
			}
		}, {
			key: 'handleClick',
			value: function handleClick() {
				this.props.addTweet(_extends({}, this.state, {
					createdAt: new Date()
				}));
				this.refs.input.value = '';
				this.refs.textarea.value = '';
			}
		}]);

		return CreateTweet;
	}(_react.Component);

	exports.default = CreateTweet;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addTweet = addTweet;
	var ADD_TWEET = exports.ADD_TWEET = 'add-tweet';

	function addTweet(tweet) {
	  return { type: ADD_TWEET, tweet: tweet };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);