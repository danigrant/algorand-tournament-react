webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CompetitionsGrid.js":
/*!****************************************!*\
  !*** ./components/CompetitionsGrid.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/algorand-react/components/CompetitionsGrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var CompetitionsGrid = function CompetitionsGrid(props) {
  return __jsx("div", {
    className: "competition-grid-wrapper margin-top-lrg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.competitions.map(function (c, index) {
    return __jsx("div", {
      key: index,
      className: "competition-card background-light-blue green-border rounded-border margin-bottom-med",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("p", {
      className: "font-color-grey",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("span", {
      className: "font-color-yellow font-weight-bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, c.number), " = a\xB3 + b\xB3 + c\xB3"), __jsx("p", {
      className: "font-color-grey",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Prize Pool: ", __jsx("span", {
      className: "font-color-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, c.balance, " Algos")), __jsx("p", {
      className: "margin-bottom-none font-color-yellow font-size-sml",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "74d1091b66c0e09678687a7d443be273bd2c9514e5c7cb9"), __jsx("p", {
      className: "margin-top-none font-color-grey font-size-sml",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "send algos to this addr to increase the prize pool"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/competition/".concat(c.number),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("p", {
      className: "font-color-grey link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Submit Answer >")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CompetitionsGrid);

/***/ })

})
//# sourceMappingURL=index.js.7c551abe17416779351f.hot-update.js.map