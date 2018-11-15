webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NewCategory/index.jsx":
/*!******************************************!*\
  !*** ./components/NewCategory/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
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
        name: name
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
      isVisible: !!v,
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

/***/ })

})
//# sourceMappingURL=index.js.fbf40810e15616d5e90b.hot-update.js.map