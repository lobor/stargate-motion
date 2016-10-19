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

	var _toolboxFront = __webpack_require__(1);

	var _routes = __webpack_require__(2);

	var _routes2 = _interopRequireDefault(_routes);

	var _navigation = __webpack_require__(10);

	var _navigation2 = _interopRequireDefault(_navigation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _toolboxFront.setNavigation)(_navigation2.default);
	(0, _toolboxFront.setRoutes)(_routes2.default);

	// event for delete plugin
	window.addEventListener('motion:delete', function (e) {
	  (0, _toolboxFront.deleteRoutes)(_routes2.default);
	  (0, _toolboxFront.deleteNavigation)(_navigation2.default);
	}, false);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Toolbox of front for add, remove navigation and routes on General app of react
	 */

	var app = window.App;

	function setNavigation(navigation) {
	  var navApp = app.state.navigation;
	  navApp = navApp.concat(navigation);
	  app.setState({ navigation: navApp });
	}

	function setRoutes(routes) {
	  var routesApp = app.state.routes;
	  routesApp = routesApp.concat(routes);
	  app.setState({ routes: routesApp });
	}

	function deleteNavigation(navigation) {
	  var navApp = app.state.navigation;
	  navApp = navApp.filter(function (nav) {
	    return -1 === navigation.indexOf(nav);
	  });
	  app.setState({ navigation: navApp });
	}

	module.exports = {
	  setNavigation: setNavigation,
	  setRoutes: setRoutes,
	  deleteNavigation: deleteNavigation
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Config = __webpack_require__(3);

	var _Config2 = _interopRequireDefault(_Config);

	var _Video = __webpack_require__(7);

	var _Video2 = _interopRequireDefault(_Video);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = [{
		pattern: '/motion/config',
		component: _Config2.default,
		name: 'motion_config'
	}, {
		pattern: '/camera',
		component: _Video2.default,
		name: 'motion_camera'
	}];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Config = function (_React$Component) {
		_inherits(Config, _React$Component);

		function Config() {
			_classCallCheck(this, Config);

			var _this = _possibleConstructorReturn(this, (Config.__proto__ || Object.getPrototypeOf(Config)).call(this));

			_this.state = {
				webcam: {
					stream: false,
					connect: false,
					record: false,
					path: ''
				},
				tabActive: 0
			};

			_this.handleTabChange = _this.handleTabChange.bind(_this);
			return _this;
		}

		_createClass(Config, [{
			key: 'handleTabChange',
			value: function handleTabChange(index) {
				this.setState({ tabActive: index });
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(_config2.default, null);
			}
		}]);

		return Config;
	}(React.Component);

	exports.default = Config;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _notify = __webpack_require__(5);

	var _notify2 = _interopRequireDefault(_notify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Config = function (_React$Component) {
	  _inherits(Config, _React$Component);

	  function Config() {
	    var _ref;

	    _classCallCheck(this, Config);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_ref = Config.__proto__ || Object.getPrototypeOf(Config)).call.apply(_ref, [this].concat(args)));

	    _this.state = {
	      webcam: [],
	      tabActive: 0
	    };

	    _this.handleTabChange = _this.handleTabChange.bind(_this);
	    return _this;
	  }

	  _createClass(Config, [{
	    key: 'handleTabChange',
	    value: function handleTabChange(index) {
	      this.setState({ tabActive: index });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      this.context.io.run('config:motion', {}, function (res) {
	        if (res) {
	          _this2.setState(res);
	        } else {
	          _this2.context.router.push('/user/login');
	        }
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(name, index, value) {
	      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
	        var webcam = this.state.webcam;
	        webcam[index][name] = value;
	        this.setState({ webcam: webcam });
	      } else {
	        this.setState(_defineProperty({}, name, index));
	      }
	    }
	  }, {
	    key: 'submit',
	    value: function submit(index, e) {
	      var _this3 = this;

	      if (!e) {
	        e = index;
	      }
	      e.preventDefault();
	      this.context.io.run('config:motion:post', this.state, function (res) {
	        if (res.response) {
	          _this3._notify.show({
	            msg: 'Has been saved',
	            type: 'success'
	          });
	        } else {
	          _this3._notify.show({
	            msg: 'An error has been occured',
	            type: 'error'
	          });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      return React.createElement(
	        Ui.Tabs,
	        null,
	        React.createElement(
	          Ui.Tab,
	          { label: 'General' },
	          React.createElement(
	            'form',
	            { method: 'POST', className: 'card__container bg-blue-light', onSubmit: this.submit.bind(this) },
	            React.createElement(
	              Ui.List,
	              null,
	              React.createElement(Ui.Divider, null),
	              React.createElement(Ui.ListItem, {
	                primaryText: 'Record video',
	                secondaryText: 'Record on motion detection',
	                leftIcon: React.createElement(Ui.FontIcon, { className: 'fiber-manual-record' }),
	                rightToggle: React.createElement(Ui.Toggle, { key: 'record_video', toggled: this.state.record_video, onToggle: this.handleChange.bind(this, 'record_video') })
	              }),
	              React.createElement(Ui.Divider, null),
	              React.createElement(Ui.ListItem, {
	                primaryText: 'Record picture',
	                secondaryText: 'Record on motion detection',
	                leftIcon: React.createElement(Ui.FontIcon, { className: 'fiber-manual-record' }),
	                rightToggle: React.createElement(Ui.Toggle, { key: 'record_picture', toggled: this.state.record_picture, onToggle: this.handleChange.bind(this, 'record_picture') })
	              }),
	              React.createElement(Ui.Divider, null)
	            ),
	            React.createElement(Ui.RaisedButton, { type: 'submit', label: 'Save', primary: true })
	          )
	        ),
	        this.state.webcam.map(function (el, i) {
	          var name = 'Camera ' + (i + 1);
	          return React.createElement(
	            Ui.Tab,
	            { label: name, key: i + 1 },
	            React.createElement(
	              'form',
	              { method: 'POST', className: 'card__container bg-blue-light', onSubmit: _this4.submit.bind(_this4, i) },
	              React.createElement(
	                Ui.List,
	                null,
	                React.createElement(Ui.ListItem, {
	                  primaryText: 'Path where save file',
	                  leftIcon: React.createElement(Ui.FontIcon, { className: 'folder' }),
	                  secondaryText: React.createElement(Ui.TextField, { type: 'text', key: 'path', label: '/tmp/motion', onChange: _this4.handleChange.bind(_this4, 'target_dir', i), value: _this4.state.webcam[i].target_dir })
	                }),
	                React.createElement(Ui.Divider, null)
	              ),
	              React.createElement(Ui.RaisedButton, { type: 'submit', label: 'Save', primary: true })
	            )
	          );
	        })
	      );
	    }
	  }]);

	  return Config;
	}(React.Component);

	Config.contextTypes = {
	  io: window.React.PropTypes.object
	};

	exports.default = Config;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _style = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Notify = function (_React$Component) {
	  _inherits(Notify, _React$Component);

	  function Notify() {
	    var _ref;

	    _classCallCheck(this, Notify);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_ref = Notify.__proto__ || Object.getPrototypeOf(Notify)).call.apply(_ref, [this].concat(args)));

	    _this.state = {
	      msg: false,
	      type: 'success',
	      open: false
	    };

	    return _this;
	  }

	  _createClass(Notify, [{
	    key: 'show',
	    value: function show(option) {
	      this.setState(option);

	      this.setState({ open: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var html = false;
	      html = React.createElement(Ui.Snackbar, {
	        open: this.state.open,
	        message: this.state.msg,
	        bodyStyle: _style.TypeNotify[this.state.type],
	        autoHideDuration: 4000
	      });
	      // }

	      return html;
	    }
	  }]);

	  return Notify;
	}(React.Component);

	exports.default = Notify;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.TypeNotify = {
	  'success': {
	    backgroundColor: '#32e432'
	  },
	  'error': {
	    backgroundColor: 'red'
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Loading = __webpack_require__(11);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _video = __webpack_require__(8);

	var _video2 = _interopRequireDefault(_video);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Video = function (_React$Component) {
		_inherits(Video, _React$Component);

		function Video() {
			var _ref;

			_classCallCheck(this, Video);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args)));

			_this.state = {
				webcam: [],
				render: false
			};
			return _this;
		}

		_createClass(Video, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				this.context.io.run('motion:get', {}, function (data) {
					_this2.setState({ webcam: data, render: true });
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var html = '';
				if (this.state.webcam.length) {
					html = [];
					this.state.webcam.forEach(function (el, i) {
						html.push(React.createElement(_video2.default, { key: i, port: el.stream_port }));
					});
				} else {
					html = 'There are not webcam';
				}

				return React.createElement(
					_Loading2.default,
					{ render: this.state.render },
					html
				);
			}
		}]);

		return Video;
	}(React.Component);

	Video.contextTypes = {
		io: React.PropTypes.object
	};
	exports.default = Video;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _style = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Video = function (_React$Component) {
	  _inherits(Video, _React$Component);

	  function Video() {
	    var _ref;

	    _classCallCheck(this, Video);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args)));

	    _this.state = {
	      msg: false,
	      msgFR: ''
	    };
	    _this.error = _this.error.bind(_this);
	    return _this;
	  }

	  _createClass(Video, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      this.context.io.on('fr:result', function (data) {
	        console.log(data);
	        if (_this2.props.port === data.port) {
	          var name = '';
	          var score = '';
	          if (data && data.label) {
	            name = data.label;
	            score = data.confidences;
	          }

	          _this2.setState({ msgFR: name + ' => ' + score });
	        }
	      });

	      this.context.io.on('fr:noFace', function (data) {
	        if (_this2.props.port === data.port) {
	          _this2.setState({ msgFR: '' });
	        }
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.context.io.off('fr:result');
	      this.context.io.off('fr:noFace');
	    }
	  }, {
	    key: 'error',
	    value: function error() {
	      this.setState({ msg: 'An error has been occured' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      Object.assign(_style.Style, _style.Width);
	      var url = '/video/cam?port=' + this.props.port;
	      return React.createElement(
	        'div',
	        { style: _style.Container },
	        React.createElement('img', { style: _style.Style, alt: this.state.msg, src: url, onError: this.error }),
	        this.state.msgFR
	      );
	    }
	  }]);

	  return Video;
	}(React.Component);

	Video.contextTypes = {
	  io: React.PropTypes.object
	};
	exports.default = Video;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	exports.Width = {
	  width: '100%',
	  'maxWidth': '400px'
	};
	exports.Style = {
	  background: 'black',
	  display: 'block',
	  margin: 'auto',
	  marginTop: '25px',
	  color: 'red',
	  height: '300px',
	  textAlign: 'center'
	};

	exports.Container = {
	  textAlign: 'center'
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	module.exports = [
	// {
	// 	"label": "Motion",
	// 	"href": "/motion/config",
	// 	"icon": "camera alt"
	// },
	{
		"label": "Camera",
		"href": "/camera",
		"icon": "videocam"
	}];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _style = __webpack_require__(12);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loading = function (_React$Component) {
		_inherits(Loading, _React$Component);

		function Loading() {
			var _ref;

			_classCallCheck(this, Loading);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args)));
		}

		_createClass(Loading, [{
			key: 'render',
			value: function render() {
				if (this.props.render) {
					if (this.props.children.length) {
						return React.createElement(
							'div',
							null,
							this.props.children.map(function (el, i) {
								return el;
							})
						);
					} else {
						return this.props.children;
					}
				}
				return React.createElement(Ui.CircularProgress, { style: _style.style, size: 80, thickness: 5 });
			}
		}]);

		return Loading;
	}(React.Component);

	exports.default = Loading;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports.style = {
	  left: '50%',
	  marginLeft: '-40px'
	};

/***/ }
/******/ ]);