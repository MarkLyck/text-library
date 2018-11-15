webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Category/index.jsx":
/*!***************************************!*\
  !*** ./components/Category/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
  }, category.messages.sort(function (message) {
    return message.positive;
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

/***/ })

})
//# sourceMappingURL=index.js.a97acb335a35f1ae02a0.hot-update.js.map