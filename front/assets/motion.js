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

	var _navigation = __webpack_require__(12);

	var _navigation2 = _interopRequireDefault(_navigation);

	var _config = __webpack_require__(13);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var conf = __webpack_require__(14);

	(0, _toolboxFront.setNavigation)(_navigation2.default);
	(0, _toolboxFront.setRoutes)(_routes2.default);
	(0, _toolboxFront.setConfig)(conf.name, _config2.default);

	// event for delete plugin
	window.addEventListener(conf.name + ':delete', function (e) {
	  (0, _toolboxFront.deleteRoutes)(_routes2.default);
	  (0, _toolboxFront.deleteNavigation)(_navigation2.default);
	}, false);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

	function deleteRoutes(routes) {
	  var routesApp = app.state.routes;
	  routesApp = routesApp.filter(function (route) {
	    return -1 === routes.indexOf(route);
	  });
	  app.setState({ routes: routesApp });
	}

	function setConfig(name, config) {
	  app.setState({ config: _defineProperty({}, name, config) });
	}

	module.exports = {
	  setNavigation: setNavigation,
	  setRoutes: setRoutes,
	  deleteNavigation: deleteNavigation,
	  deleteRoutes: deleteRoutes,
	  setConfig: setConfig
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

	var _Loading = __webpack_require__(8);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _video = __webpack_require__(10);

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
/* 9 */
/***/ function(module, exports) {

	'use strict';

	module.exports.style = {
	  left: '50%',
	  marginLeft: '-40px'
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _style = __webpack_require__(11);

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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  name: 'motion',
	  motion: __webpack_require__(15)
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  /**
	    Rename this distribution example file to motion.conf
	    This config file was generated by motion 3.2.12+git20140228
	  **/

	  /**
	    Daemon
	  **/

	  // Start in daemon (background) mode and release terminal (default: off)
	  daemon: 'off',

	  // File to store the process ID, also called pid file. (default: not defined)
	  process_id_file: '/var/run/motion/motion.pid',

	  /**
	    Basic Setup Mode
	  **/

	  // Start in Setup-Mode, daemon disabled. (default: off)
	  setup_mode: 'off',

	  // Use a file to save logs messages, if not defined stderr and syslog is used. (default: not defined)
	  //logfile: '/tmp/motion.log'

	  // Level of log messages [1..9] (EMR, ALR, CRT, ERR, WRN, NTC, INF, DBG, ALL). (default: 6 / NTC)
	  log_level: 6,

	  // Filter to log messages by type (COR, STR, ENC, NET, DBL, EVT, TRK, VID, ALL). (default: ALL)
	  log_type: 'all',

	  /**
	    Capture device options
	  **/

	  // Videodevice to be used for capturing  (default /dev/video0)
	  // for FreeBSD default is /dev/bktr0
	  videodevice: '/dev/video0',

	  // v4l2_palette allows to choose preferable palette to be use by motion
	  // to capture from those supported by your videodevice. (default: 17)
	  // E.g. if your videodevice supports both V4L2_PIX_FMT_SBGGR8 and
	  // V4L2_PIX_FMT_MJPEG then motion will by default use V4L2_PIX_FMT_MJPEG.
	  // Setting v4l2_palette to 2 forces motion to use V4L2_PIX_FMT_SBGGR8
	  // instead.
	  //
	  // Values :
	  // V4L2_PIX_FMT_SN9C10X : 0  'S910'
	  // V4L2_PIX_FMT_SBGGR16 : 1  'BYR2'
	  // V4L2_PIX_FMT_SBGGR8  : 2  'BA81'
	  // V4L2_PIX_FMT_SPCA561 : 3  'S561'
	  // V4L2_PIX_FMT_SGBRG8  : 4  'GBRG'
	  // V4L2_PIX_FMT_SGRBG8  : 5  'GRBG'
	  // V4L2_PIX_FMT_PAC207  : 6  'P207'
	  // V4L2_PIX_FMT_PJPG    : 7  'PJPG'
	  // V4L2_PIX_FMT_MJPEG   : 8  'MJPEG'
	  // V4L2_PIX_FMT_JPEG    : 9  'JPEG'
	  // V4L2_PIX_FMT_RGB24   : 10 'RGB3'
	  // V4L2_PIX_FMT_SPCA501 : 11 'S501'
	  // V4L2_PIX_FMT_SPCA505 : 12 'S505'
	  // V4L2_PIX_FMT_SPCA508 : 13 'S508'
	  // V4L2_PIX_FMT_UYVY    : 14 'UYVY'
	  // V4L2_PIX_FMT_YUYV    : 15 'YUYV'
	  // V4L2_PIX_FMT_YUV422P : 16 '422P'
	  // V4L2_PIX_FMT_YUV420  : 17 'YU12'
	  //
	  v4l2_palette: 15,

	  // Tuner device to be used for capturing using tuner as source (default /dev/tuner0)
	  // This is ONLY used for FreeBSD. Leave it commented out for Linux
	  // tunerdevice: '/dev/tuner0'

	  // The video input to be used (default: -1)
	  // Should normally be set to 0 or 1 for video/TV cards, and -1 for USB cameras
	  input: -1,

	  // The video norm to use (only for video capture and TV tuner cards)
	  // Values: 0 (PAL), 1 (NTSC), 2 (SECAM), 3 (PAL NC no colour). Default: 0 (PAL)
	  norm: 0,

	  // The frequency to set the tuner to (kHz) (only for TV tuner cards) (default: 0)
	  frequency: 0,

	  // Rotate image this number of degrees. The rotation affects all saved images as
	  // well as movies. Valid values: 0 (default = no rotation), 90, 180 and 270.
	  rotate: 0,

	  // Image width (pixels). Valid range: Camera dependent, default: 352
	  width: 320,

	  // Image height (pixels). Valid range: Camera dependent, default: 288
	  height: 240,

	  // Maximum number of frames to be captured per second.
	  // Valid range: 2-100. Default: 100 (almost no limit).
	  framerate: 25,

	  // Minimum time in seconds between capturing picture frames from the camera.
	  // Default: 0 = disabled - the capture rate is given by the camera framerate.
	  // This option is used when you want to capture images at a rate lower than 2 per second.
	  minimum_frame_time: 0,

	  // URL to use if you are using a network camera, size will be autodetected (incl http:// ftp:// mjpg:// rstp:// or file:///)
	  // Must be a URL that returns single jpeg pictures or a raw mjpeg stream. Default: Not defined
	  //netcam_url: 'value',

	  // Username and password for network camera (only if required). Default: not defined
	  // Syntax is user:password
	  // netcam_userpass: 'value',

	  // The setting for keep-alive of network socket, should improve performance on compatible net cameras.
	  // off:   The historical implementation using HTTP/1.0, closing the socket after each http request.
	  // force: Use HTTP/1.0 requests with keep alive header to reuse the same connection.
	  // on:    Use HTTP/1.1 requests that support keep alive as default.
	  // Default: off
	  netcam_keepalive: 'off',

	  // URL to use for a netcam proxy server, if required, e.g. "http://myproxy".
	  // If a port number other than 80 is needed, use "http://myproxy:1234".
	  // Default: not defined
	  // netcam_proxy: 'value',

	  // Set less strict jpeg checks for network cameras with a poor/buggy firmware.
	  // Default: off
	  netcam_tolerant_check: 'off',

	  // Let motion regulate the brightness of a video device (default: off).
	  // The auto_brightness feature uses the brightness option as its target value.
	  // If brightness is zero auto_brightness will adjust to average brightness value 128.
	  // Only recommended for cameras without auto brightness
	  auto_brightness: 'off',

	  // Set the initial brightness of a video device.
	  // If auto_brightness is enabled, this value defines the average brightness level
	  // which Motion will try and adjust to.
	  // Valid range 0-255, default 0 = disabled
	  brightness: 0,

	  // Set the contrast of a video device.
	  // Valid range 0-255, default 0 = disabled
	  contrast: 0,

	  // Set the saturation of a video device.
	  // Valid range 0-255, default 0 = disabled
	  saturation: 0,

	  // Set the hue of a video device (NTSC feature).
	  // Valid range 0-255, default 0 = disabled
	  hue: 0,

	  /**
	    Round Robin (multiple inputs on same video device name)
	  **/

	  // Number of frames to capture in each roundrobin step (default: 1)
	  roundrobin_frames: 1,

	  // Number of frames to skip before each roundrobin step (default: 1)
	  roundrobin_skip: 1,

	  // Try to filter out noise generated by roundrobin (default: off)
	  switchfilter: 'off',

	  /*
	  // Motion Detection Settings:
	  */

	  // Threshold for number of changed pixels in an image that
	  // triggers motion detection (default: 1500)
	  threshold: 1500,

	  // Automatically tune the threshold down if possible (default: off)
	  threshold_tune: 'off',

	  // Noise threshold for the motion detection (default: 32)
	  noise_level: 32,

	  // Automatically tune the noise threshold (default: on)
	  noise_tune: 'on',

	  // Despeckle motion image using (e)rode or (d)ilate or (l)abel (Default: not defined)
	  // Recommended value is EedDl. Any combination (and number of) of E, e, d, and D is valid.
	  // (l)abeling must only be used once and the 'l' must be the last letter.
	  // Comment out to disable
	  despeckle_filter: 'EedDl',

	  // Detect motion in predefined areas (1 - 9). Areas are numbered like that:  1 2 3
	  // A script (on_area_detected) is started immediately when motion is         4 5 6
	  // detected in one of the given areas, but only once during an event.        7 8 9
	  // One or more areas can be specified with this option. Take care: This option
	  // does NOT restrict detection to these areas! (Default: not defined)
	  // area_detect: 'value',

	  // PGM file to use as a sensitivity mask.
	  // Full path name to. (Default: not defined)
	  // mask_file: 'value',

	  // Dynamically create a mask file during operation (default: 0)
	  // Adjust speed of mask changes from 0 (off) to 10 (fast)
	  smart_mask_speed: 0,

	  // Ignore sudden massive light intensity changes given as a percentage of the picture
	  // area that changed intensity. Valid range: 0 - 100 , default: 0 = disabled
	  lightswitch: 0,

	  // Picture frames must contain motion at least the specified number of frames
	  // in a row before they are detected as true motion. At the default of 1, all
	  // motion is detected. Valid range: 1 to thousands, recommended 1-5
	  minimum_motion_frames: 1,

	  // Specifies the number of pre-captured (buffered) pictures from before motion
	  // was detected that will be output at motion detection.
	  // Recommended range: 0 to 5 (default: 0)
	  // Do not use large values! Large values will cause Motion to skip video frames and
	  // cause unsmooth movies. To smooth movies use larger values of post_capture instead.
	  pre_capture: 0,

	  // Number of frames to capture after motion is no longer detected (default: 0)
	  post_capture: 0,

	  // Event Gap is the seconds of no motion detection that triggers the end of an event.
	  // An event is defined as a series of motion images taken within a short timeframe.
	  // Recommended value is 60 seconds (Default). The value -1 is allowed and disables
	  // events causing all Motion to be written to one single movie file and no pre_capture.
	  // If set to 0, motion is running in gapless mode. Movies don't have gaps anymore. An
	  // event ends right after no more motion is detected and post_capture is over.
	  event_gap: 60,

	  // Maximum length in seconds of a movie
	  // When value is exceeded a new movie file is created. (Default: 0 = infinite)
	  max_movie_time: 0,

	  // Always save images even if there was no motion (default: off)
	  emulate_motion: 'off',

	  /*
	  // Image File Output
	  */

	  // Output 'normal' pictures when motion is detected (default: on)
	  // Valid values: on, off, first, best, center
	  // When set to 'first', only the first picture of an event is saved.
	  // Picture with most motion of an event is saved when set to 'best'.
	  // Picture with motion nearest center of picture is saved when set to 'center'.
	  // Can be used as preview shot for the corresponding movie.
	  output_pictures: 'off',

	  // Output pictures with only the pixels moving object (ghost images) (default: off)
	  output_debug_pictures: 'off',

	  // The quality (in percent) to be used by the jpeg compression (default: 75)
	  quality: 75,

	  // Type of output images
	  // Valid values: jpeg, ppm (default: jpeg)
	  picture_type: 'jpeg',

	  /*
	  // FFMPEG related options
	  // Film (movies) file output, and deinterlacing of the video input
	  // The options movie_filename and timelapse_filename are also used
	  // by the ffmpeg feature
	  */

	  // Use ffmpeg to encode movies in realtime (default: off)
	  ffmpeg_output_movies: 'off',

	  // Use ffmpeg to make movies with only the pixels moving
	  // object (ghost images) (default: off)
	  ffmpeg_output_debug_movies: 'off',

	  // Use ffmpeg to encode a timelapse movie
	  // Default value 0 = off - else save frame every Nth second
	  ffmpeg_timelapse: 0,

	  // The file rollover mode of the timelapse video
	  // Valid values: hourly, daily (default), weekly-sunday, weekly-monday, monthly, manual
	  ffmpeg_timelapse_mode: 'daily',

	  // Bitrate to be used by the ffmpeg encoder (default: 400000)
	  // This option is ignored if ffmpeg_variable_bitrate is not 0 (disabled)
	  ffmpeg_bps: 500000,

	  // Enables and defines variable bitrate for the ffmpeg encoder.
	  // ffmpeg_bps is ignored if variable bitrate is enabled.
	  // Valid values: 0 (default) = fixed bitrate defined by ffmpeg_bps,
	  // or the range 2 - 31 where 2 means best quality and 31 is worst.
	  ffmpeg_variable_bitrate: 0,

	  // Codec to used by ffmpeg for the video compression.
	  // Timelapse mpegs are always made in mpeg1 format independent from this option.
	  // Supported formats are: mpeg1 (ffmpeg-0.4.8 only), mpeg4 (default), and msmpeg4.
	  // mpeg1 - gives you files with extension .mpg
	  // mpeg4 or msmpeg4 - gives you files with extension .avi
	  // msmpeg4 is recommended for use with Windows Media Player because
	  // it requires no installation of codec on the Windows client.
	  // swf - gives you a flash film with extension .swf
	  // flv - gives you a flash video with extension .flv
	  // ffv1 - FF video codec 1 for Lossless Encoding ( experimental )
	  // mov - QuickTime ( testing )
	  // ogg - Ogg/Theora ( testing )
	  ffmpeg_video_codec: 'mpeg4',

	  // Use ffmpeg to deinterlace video. Necessary if you use an analog camera
	  // and see horizontal combing on moving objects in video or pictures.
	  // (default: off)
	  ffmpeg_deinterlace: 'off',

	  /*
	  // SDL Window
	  */

	  // Number of motion thread to show in SDL Window (default: 0 = disabled)
	  sdl_threadnr: 0,

	  /*
	  // External pipe to video encoder
	  // Replacement for FFMPEG builtin encoder for ffmpeg_output_movies only.
	  // The options movie_filename and timelapse_filename are also used
	  // by the ffmpeg feature
	  /*/

	  // Bool to enable or disable extpipe (default: off)
	  use_extpipe: 'off',

	  // External program (full path and opts) to pipe raw video to
	  // Generally, use '-' for STDIN...
	  //extpipe mencoder -demuxer rawvideo -rawvideo w=320:h=240:i420 -ovc x264 -x264encopts bframes=4:frameref=1:subq=1:scenecut=-1:nob_adapt:threads=1:keyint=1000:8x8dct:vbv_bufsize=4000:crf=24:partitions=i8x8,i4x4:vbv_maxrate=800:no-chroma-me -vf denoise3d=16:12:48:4,pp=lb -of   avi -o %f.avi - -fps %fps


	  /*
	  // Snapshots (Traditional Periodic Webcam File Output)
	  */

	  // Make automated snapshot every N seconds (default: 0 = disabled)
	  snapshot_interval: 0,

	  /*
	  // Text Display
	  // %Y = year, %m = month, %d = date,
	  // %H = hour, %M = minute, %S = second, %T = HH:MM:SS,
	  // %v = event, %q = frame number, %t = thread (camera) number,
	  // %D = changed pixels, %N = noise level, \n = new line,
	  // %i and %J = width and height of motion area,
	  // %K and %L = X and Y coordinates of motion center
	  // %C = value defined by text_event - do not use with text_event!
	  // You can put quotation marks around the text to allow
	  // leading spaces
	  */

	  // Locate and draw a box around the moving object.
	  // Valid values: on, off, preview (default: off)
	  // Set to 'preview' will only draw a box in preview_shot pictures.
	  locate_motion_mode: 'off',

	  // Set the look and style of the locate box if enabled.
	  // Valid values: box, redbox, cross, redcross (default: box)
	  // Set to 'box' will draw the traditional box.
	  // Set to 'redbox' will draw a red box.
	  // Set to 'cross' will draw a little cross to mark center.
	  // Set to 'redcross' will draw a little red cross to mark center.
	  locate_motion_style: 'box',

	  // Draws the timestamp using same options as C function strftime(3)
	  // Default: %Y-%m-%d\n%T = date in ISO format and time in 24 hour clock
	  // Text is placed in lower right corner
	  text_right: '%Y-%m-%d\n%T-%q',

	  // Draw a user defined text on the images using same options as C function strftime(3)
	  // Default: Not defined = no text
	  // Text is placed in lower left corner
	  // text_left CAMERA %t

	  // Draw the number of changed pixed on the images (default: off)
	  // Will normally be set to off except when you setup and adjust the motion settings
	  // Text is placed in upper right corner
	  text_changes: 'off',

	  // This option defines the value of the special event conversion specifier %C
	  // You can use any conversion specifier in this option except %C. Date and time
	  // values are from the timestamp of the first image in the current event.
	  // Default: %Y%m%d%H%M%S
	  // The idea is that %C can be used filenames and text_left/right for creating
	  // a unique identifier for each event.
	  text_event: '%Y%m%d%H%M%S',

	  // Draw characters at twice normal size on images. (default: off)
	  text_double: 'off',

	  // Text to include in a JPEG EXIF comment
	  // May be any text, including conversion specifiers.
	  // The EXIF timestamp is included independent of this text.
	  //exif_text %i%J/%K%L

	  /*
	  // Target Directories and filenames For Images And Films
	  // For the options snapshot_, picture_, movie_ and timelapse_filename
	  // you can use conversion specifiers
	  // %Y = year, %m = month, %d = date,
	  // %H = hour, %M = minute, %S = second,
	  // %v = event, %q = frame number, %t = thread (camera) number,
	  // %D = changed pixels, %N = noise level,
	  // %i and %J = width and height of motion area,
	  // %K and %L = X and Y coordinates of motion center
	  // %C = value defined by text_event
	  // Quotation marks round string are allowed.
	  */

	  // Target base directory for pictures and films
	  // Recommended to use absolute path. (Default: current working directory)
	  target_dir: '/var/lib/motion',

	  // File path for snapshots (jpeg or ppm) relative to target_dir
	  // Default: %v-%Y%m%d%H%M%S-snapshot
	  // Default value is equivalent to legacy oldlayout option
	  // For Motion 3.0 compatible mode choose: %Y/%m/%d/%H/%M/%S-snapshot
	  // File extension .jpg or .ppm is automatically added so do not include this.
	  // Note: A symbolic link called lastsnap.jpg created in the target_dir will always
	  // point to the latest snapshot, unless snapshot_filename is exactly 'lastsnap'
	  snapshot_filename: '%v-%Y%m%d%H%M%S-snapshot',

	  // File path for motion triggered images (jpeg or ppm) relative to target_dir
	  // Default: %v-%Y%m%d%H%M%S-%q
	  // Default value is equivalent to legacy oldlayout option
	  // For Motion 3.0 compatible mode choose: %Y/%m/%d/%H/%M/%S-%q
	  // File extension .jpg or .ppm is automatically added so do not include this
	  // Set to 'preview' together with best-preview feature enables special naming
	  // convention for preview shots. See motion guide for details
	  picture_filename: '%v-%Y%m%d%H%M%S-%q',

	  // File path for motion triggered ffmpeg films (movies) relative to target_dir
	  // Default: %v-%Y%m%d%H%M%S
	  // Default value is equivalent to legacy oldlayout option
	  // For Motion 3.0 compatible mode choose: %Y/%m/%d/%H%M%S
	  // File extension .mpg or .avi is automatically added so do not include this
	  // This option was previously called ffmpeg_filename
	  movie_filename: '%v-%Y%m%d%H%M%S',

	  // File path for timelapse movies relative to target_dir
	  // Default: %Y%m%d-timelapse
	  // Default value is near equivalent to legacy oldlayout option
	  // For Motion 3.0 compatible mode choose: %Y/%m/%d-timelapse
	  // File extension .mpg is automatically added so do not include this
	  timelapse_filename: '%Y%m%d-timelapse',

	  /*
	  // Global Network Options
	  */
	  // Enable or disable IPV6 for http control and stream (default: off )
	  ipv6_enabled: 'off',

	  /*
	  // Live Stream Server
	  */

	  // The mini-http server listens to this port for requests (default: 0 = disabled)
	  stream_port: 8081,

	  // Quality of the jpeg (in percent) images produced (default: 50)
	  stream_quality: 50,

	  // Output frames at 1 fps when no motion is detected and increase to the
	  // rate given by stream_maxrate when motion is detected (default: off)
	  stream_motion: 'off',

	  // Maximum framerate for stream streams (default: 1)
	  stream_maxrate: 25,

	  // Restrict stream connections to localhost only (default: on)
	  stream_localhost: 'on',

	  // Limits the number of images per connection (default: 0 = unlimited)
	  // Number can be defined by multiplying actual stream rate by desired number of seconds
	  // Actual stream rate is the smallest of the numbers framerate and stream_maxrate
	  stream_limit: 0,

	  // Set the authentication method (default: 0)
	  // 0 = disabled
	  // 1 = Basic authentication
	  // 2 = MD5 digest (the safer authentication)
	  stream_auth_method: 0,

	  // Authentication for the stream. Syntax username:password
	  // Default: not defined (Disabled)
	  stream_authentication: 'username:password',

	  /*
	  // HTTP Based Control
	  */

	  // TCP/IP port for the http server to listen on (default: 0 = disabled)
	  webcontrol_port: 0,

	  // Restrict control connections to localhost only (default: on)
	  webcontrol_localhost: 'on',

	  // Output for http server, select off to choose raw text plain (default: on)
	  webcontrol_html_output: 'on',

	  // Authentication for the http based control. Syntax username:password
	  // Default: not defined (Disabled)
	  // webcontrol_authentication username:password


	  /*
	  // Tracking (Pan/Tilt)
	  */

	  // Type of tracker (0=none (default), 1=stepper, 2=iomojo, 3=pwc, 4=generic, 5=uvcvideo, 6=servo)
	  // The generic type enables the definition of motion center and motion size to
	  // be used with the conversion specifiers for options like on_motion_detected
	  track_type: 0,

	  // Enable auto tracking (default: off)
	  track_auto: 'off',

	  // Serial port of motor (default: none)
	  //track_port: '/dev/ttyS0',

	  // Motor number for x-axis (default: 0)
	  //track_motorx: 0,

	  // Set motorx reverse (default: 0)
	  //track_motorx_reverse: 0,

	  // Motor number for y-axis (default: 0)
	  //track_motory: 1,

	  // Set motory reverse (default: 0)
	  //track_motory_reverse: 0,

	  // Maximum value on x-axis (default: 0)
	  //track_maxx: 200,

	  // Minimum value on x-axis (default: 0)
	  //track_minx: 50,

	  // Maximum value on y-axis (default: 0)
	  //track_maxy: 200,

	  // Minimum value on y-axis (default: 0)
	  //track_miny: 50,

	  // Center value on x-axis (default: 0)
	  //track_homex: 128,

	  // Center value on y-axis (default: 0)
	  //track_homey: 128,

	  // ID of an iomojo camera if used (default: 0)
	  track_iomojo_id: 0,

	  // Angle in degrees the camera moves per step on the X-axis
	  // with auto-track (default: 10)
	  // Currently only used with pwc type cameras
	  track_step_angle_x: 10,

	  // Angle in degrees the camera moves per step on the Y-axis
	  // with auto-track (default: 10)
	  // Currently only used with pwc type cameras
	  track_step_angle_y: 10,

	  // Delay to wait for after tracking movement as number
	  // of picture frames (default: 10)
	  track_move_wait: 10,

	  // Speed to set the motor to (stepper motor option) (default: 255)
	  track_speed: 255,

	  // Number of steps to make (stepper motor option) (default: 40)
	  track_stepsize: 40,

	  /*
	  // External Commands, Warnings and Logging:
	  // You can use conversion specifiers for the on_xxxx commands
	  // %Y = year, %m = month, %d = date,
	  // %H = hour, %M = minute, %S = second,
	  // %v = event, %q = frame number, %t = thread (camera) number,
	  // %D = changed pixels, %N = noise level,
	  // %i and %J = width and height of motion area,
	  // %K and %L = X and Y coordinates of motion center
	  // %C = value defined by text_event
	  // %f = filename with full path
	  // %n = number indicating filetype
	  // Both %f and %n are only defined for on_picture_save,
	  // on_movie_start and on_movie_end
	  // Quotation marks round string are allowed.
	  */

	  // Do not sound beeps when detecting motion (default: on)
	  // Note: Motion never beeps when running in daemon mode.
	  quiet: 'on'

	};

/***/ }
/******/ ]);