module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Category/index.jsx":
/*!***************************************!*\
  !*** ./components/Category/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Message */ "./components/Message/index.jsx");
/* harmony import */ var _NewMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NewMessage */ "./components/NewMessage/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Category/styles.js");
var _jsxFileName = "/Users/marklyck/web/high-status-texts/components/Category/index.jsx";





var Category = function Category(_ref) {
  var category = _ref.category,
      refetch = _ref.refetch;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, category.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, category.messages.sort(function (a, b) {
    return b.positive - a.positive;
  }).map(function (message) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_1__["default"], {
      message: message,
      key: message.id,
      refetch: refetch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    category: category,
    refetch: refetch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./components/Category/styles.js":
/*!***************************************!*\
  !*** ./components/Category/styles.js ***!
  \***************************************/
/*! exports provided: Container, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);


var Container =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "e16ek95s0"
})("margin-bottom:48px;");
var Title =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("h2", {
  target: "e16ek95s1"
})("font-size:1.4rem;");

/***/ }),

/***/ "./components/CategoryList/index.jsx":
/*!*******************************************!*\
  !*** ./components/CategoryList/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Category */ "./components/Category/index.jsx");
/* harmony import */ var _NewCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NewCategory */ "./components/NewCategory/index.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/CategoryList/styles.js");
var _jsxFileName = "/Users/marklyck/web/high-status-texts/components/CategoryList/index.jsx";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    allCategories {\n      id\n      name\n      messages {\n        id\n        text\n        positive\n        negative\n      }\n    }\n    _allCategoriesMeta {\n      count\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ALL_CATEGORIES = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var CategoryList = function CategoryList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: ALL_CATEGORIES,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error,
        refetch = _ref.refetch;
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Error loading categories.");
    if (!data) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Loading...");
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, data.allCategories.map(function (category) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Category__WEBPACK_IMPORTED_MODULE_3__["default"], {
        category: category,
        key: category.id,
        refetch: refetch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      });
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewCategory__WEBPACK_IMPORTED_MODULE_4__["default"], {
      refetch: refetch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
  });
}; // The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)


/* harmony default export */ __webpack_exports__["default"] = (CategoryList);

/***/ }),

/***/ "./components/CategoryList/styles.js":
/*!*******************************************!*\
  !*** ./components/CategoryList/styles.js ***!
  \*******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);


var Container =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("ul", {
  target: "e1lncfdh0"
})("margin:0 auto;padding:64px;width:100%;max-width:1200px;");

/***/ }),

/***/ "./components/Inputs/styles.js":
/*!*************************************!*\
  !*** ./components/Inputs/styles.js ***!
  \*************************************/
/*! exports provided: Container, Input, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);


var Container =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "e1yqvsyt0"
})("display:flex;align-items:center;margin-top:16px;height:100%;");
var Input =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("input", {
  target: "e1yqvsyt1"
})("height:100%;width:100%;padding:24px;border:none;border-radius:6px;border-top-right-radius:0;border-bottom-right-radius:0;background:none;font-size:1.1rem;&:focus{background:white;}");
var Button =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("button", {
  target: "e1yqvsyt2"
})("display:", function (props) {
  return props.isVisible ? "flex" : "none";
}, ";background:", function (props) {
  return props.theme.colors.blue;
}, ";border-radius:6px;border-top-left-radius:0;border-bottom-left-radius:0;color:white;align-items:center;justify-content:center;height:100%;padding:24px;border:none;font-size:1.1rem;font-weight:500;");

/***/ }),

/***/ "./components/Message/index.jsx":
/*!**************************************!*\
  !*** ./components/Message/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_copyToClipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/copyToClipboard */ "./lib/copyToClipboard.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Message/styles.js");
var _jsxFileName = "/Users/marklyck/web/high-status-texts/components/Message/index.jsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation updateMessage($id: ID!, $positive: Int, $negative: Int) {\n    updateMessage(id: $id, positive: $positive, negative: $negative) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var POSITIVE = "POSITIVE";
var NEGATIVE = "NEGATIVE";
var UPDATE_VOTE = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Message = function Message(_ref) {
  var message = _ref.message,
      refetch = _ref.refetch;

  var handleVote = function handleVote(type, updateMessage) {
    var positive = message.positive,
        negative = message.negative;
    if (type === POSITIVE) positive += 1;else negative += 1;
    updateMessage({
      variables: {
        id: message.id,
        positive: positive,
        negative: negative
      }
    }).then(refetch);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: UPDATE_VOTE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, function (updateMessage) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["MessageContainer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["MessageText"], {
      onClick: function onClick() {
        return Object(_lib_copyToClipboard__WEBPACK_IMPORTED_MODULE_3__["copyToClipboard"])(message.text);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, message.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["ActionContainer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["VoteButton"], {
      positive: true,
      onClick: handleVote.bind(null, POSITIVE, updateMessage),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "+1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Succeses"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, message.positive, "/", message.negative + message.negative), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["VoteButton"], {
      negative: true,
      onClick: handleVote.bind(null, NEGATIVE, updateMessage),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "-1")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./components/Message/styles.js":
/*!**************************************!*\
  !*** ./components/Message/styles.js ***!
  \**************************************/
/*! exports provided: MessageContainer, MessageText, ActionContainer, Succeses, VoteButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageContainer", function() { return MessageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageText", function() { return MessageText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionContainer", function() { return ActionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Succeses", function() { return Succeses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteButton", function() { return VoteButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);


var MessageContainer =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "erzgwi70"
})("display:flex;align-items:center;justify-content:space-between;margin:16px 0;padding:16px;background:white;border-radius:6px;box-shadow:rgba(111,120,156,0.08) 0px 4px 14px 0px;");
var MessageText =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("p", {
  target: "erzgwi71"
})("width:100%;height:42px;display:flex;align-items:center;&:hover{cursor:pointer;}&:active{color:", function (props) {
  return props.theme.colors.primary;
}, ";}");
var ActionContainer =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "erzgwi72"
})("display:flex;align-items:center;");
var Succeses =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("p", {
  target: "erzgwi73"
})("font-weight:500;font-size:0.8rem;color:", function (props) {
  return props.theme.colors.text;
}, ";");
var VoteButton =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("button", {
  target: "erzgwi74"
})("background:white;color:", function (props) {
  return props.theme.colors[props.positive ? "green" : "red"];
}, ";margin:8px;height:32px;width:32px;border:none;font-weight:bold;font-size:1rem;border-radius:6px;box-shadow:rgba(111,120,156,0.08) 0px 4px 14px 0px;transform:transform 0.2s;&:hover{transform:scale(1.1);}");

/***/ }),

/***/ "./components/NewCategory/index.jsx":
/*!******************************************!*\
  !*** ./components/NewCategory/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Inputs_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inputs/styles */ "./components/Inputs/styles.js");
var _jsxFileName = "/Users/marklyck/web/high-status-texts/components/NewCategory/index.jsx";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation createCategory($name: String!) {\n    createCategory(name: $name) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var CREATE_CATEGORY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var NewCategory = function NewCategory(_ref) {
  var category = _ref.category,
      refetch = _ref.refetch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var handleOnChange = function handleOnChange(event) {
    return setName(event.target.value);
  };

  var handleSubmit = function handleSubmit(createMessage) {
    createMessage({
      variables: {
        name: name.trim()
      }
    }).then(function () {
      return setName("");
    }).then(refetch);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: CREATE_CATEGORY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, function (createCategory) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Inputs_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Inputs_styles__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      value: name,
      onChange: handleOnChange,
      placeholder: "New category...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Inputs_styles__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isVisible: !!name,
      onClick: handleSubmit.bind(null, createCategory),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Add"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewCategory);

/***/ }),

/***/ "./components/NewMessage/index.jsx":
/*!*****************************************!*\
  !*** ./components/NewMessage/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Inputs_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Inputs/styles */ "./components/Inputs/styles.js");
var _jsxFileName = "/Users/marklyck/web/high-status-texts/components/NewMessage/index.jsx";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation createMessage($text: String!, $categoryId: ID!) {\n    createMessage(text: $text, categoryId: $categoryId) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var CREATE_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var NewMessage = function NewMessage(_ref) {
  var category = _ref.category,
      refetch = _ref.refetch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var handleOnChange = function handleOnChange(event) {
    return setText(event.target.value);
  };

  var handleSubmit = function handleSubmit(createMessage) {
    createMessage({
      variables: {
        categoryId: category.id,
        text: text.trim()
      }
    }).then(function () {
      return setText("");
    }).then(refetch);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: CREATE_MESSAGE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, function (createMessage) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Inputs_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Inputs_styles__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      type: "text",
      value: text,
      onChange: handleOnChange,
      placeholder: "New Message...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Inputs_styles__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isVisible: !!text,
      onClick: handleSubmit.bind(null, createMessage),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Add"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewMessage);

/***/ }),

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo */ "next-apollo");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__);


var config = {
  link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
    uri: "https://api.graph.cool/simple/v1/cjohn0trr0iqh0110icrg9951",
    // Server URL (must be absolute)
    opts: {
      credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`

    }
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_0__["withData"])(config));

/***/ }),

/***/ "./lib/copyToClipboard.js":
/*!********************************!*\
  !*** ./lib/copyToClipboard.js ***!
  \********************************/
/*! exports provided: copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
var copyToClipboard = function copyToClipboard(str) {
  var el = document.createElement('textarea'); // Create a <textarea> element

  el.value = str; // Set its value to the string that you want copied

  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof

  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible

  document.body.appendChild(el); // Append the <textarea> element to the HTML document

  var selected = document.getSelection().rangeCount > 0 // Check if there is any content selected previously
  ? document.getSelection().getRangeAt(0) // Store selection if found
  : false; // Mark as false to know no selection existed before

  el.select(); // Select the <textarea> content

  document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)

  document.body.removeChild(el); // Remove the <textarea> element

  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document

    document.getSelection().addRange(selected); // Restore the original selection
  }
};

/***/ }),

/***/ "./lib/layout.js":
/*!***********************!*\
  !*** ./lib/layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "./lib/theme.js");
var _jsxFileName = "/Users/marklyck/web/high-status-texts/lib/layout.js";



 // Add global styles

Object(emotion__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])("html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}html{font-family:'Rubik'}body{line-height:1;background:#F5F5F8;}input,button{outline:none;}button:hover{cursor:pointer;}p,h1,h2,h3,h4,h5{color:#494949;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}*{box-sizing:border-box;}");
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(emotion_theming__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var theme = {
  colors: {
    primary: "#4EA4F2",
    secondary: "blue",
    tertiary: "purple",
    offWhite: "#F5F5F8",
    text: "#494949",
    green: "#61D5A2",
    blue: "#4EA4F2",
    red: "#DA3861"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/layout */ "./lib/layout.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var _components_CategoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CategoryList */ "./components/CategoryList/index.jsx");
var _jsxFileName = "/Users/marklyck/web/high-status-texts/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CategoryList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),

/***/ "emotion-theming":
/*!**********************************!*\
  !*** external "emotion-theming" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-apollo":
/*!******************************!*\
  !*** external "next-apollo" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-emotion":
/*!********************************!*\
  !*** external "react-emotion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map