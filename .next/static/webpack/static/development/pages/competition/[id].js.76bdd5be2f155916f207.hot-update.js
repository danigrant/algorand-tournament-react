webpackHotUpdate("static/development/pages/competition/[id].js",{

/***/ "./pages/competition/[id].js":
/*!***********************************!*\
  !*** ./pages/competition/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/danigrant/Projects/algorand-react/pages/competition/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var SubmitSolutionPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SubmitSolutionPage, _React$Component);

  function SubmitSolutionPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubmitSolutionPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SubmitSolutionPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function () {
      _this.setState({
        isSubmitted: true
      }); // TODO: need to actually send submit here

    });

    _this.state = {
      isSubmitted: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SubmitSolutionPage, [{
    key: "render",
    value: function render() {
      var router = this.props.router;

      if (!this.state.isSubmitted) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, __jsx("p", {
          className: "margin-top-lrg font-color-yellow font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Solve The Diophantine Equation for 114"), __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx("p", {
          className: "margin-top-med font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Which integer are you submitting a solution for?"), __jsx("select", {
          name: "competition-select",
          form: "carform",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, __jsx("option", {
          value: "volvo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, "Volvo"), __jsx("option", {
          value: "saab",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "Saab"), __jsx("option", {
          value: "opel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "Opel"), __jsx("option", {
          value: "audi",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, "Audi")), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "Submit answer to the diophantine puzzle a\xB3 + b\xB3 + c\xB3 = 114"), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, "What three integers can you sum the cubes of to get 114?"), __jsx("div", {
          className: "margin-top-med columns-parent-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, __jsx("div", {
          className: "column-30-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Integer a:"), __jsx("div", {
          className: "column-70-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, __jsx("input", {
          className: "rounded-border green-border background-light-blue",
          type: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }))), __jsx("div", {
          className: "columns-parent-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, __jsx("div", {
          className: "column-30-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Integer b:"), __jsx("div", {
          className: "column-70-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("input", {
          className: "rounded-border green-border background-light-blue",
          type: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }))), __jsx("div", {
          className: "columns-parent-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, __jsx("div", {
          className: "column-30-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "Integer c:"), __jsx("div", {
          className: "column-70-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, __jsx("input", {
          className: "rounded-border green-border background-light-blue",
          type: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }))), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "If you\u2019ve found the solution, we\u2019ll send you the 32 Algos in the escrow prize pool."), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "What is your Algorand address?"), __jsx("input", {
          className: "margin-top-sml rounded-border green-border background-light-blue",
          type: "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "What should we call you when we display you on the leaderboard?"), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "What is your name?"), __jsx("input", {
          className: "margin-top-sml rounded-border green-border background-light-blue",
          type: "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "It may take a little bit to verify but we'll email you when we're done."), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "What is your email?"), __jsx("input", {
          className: "margin-top-sml rounded-border green-border background-light-blue",
          type: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        })), __jsx("div", {
          onClick: this.handleSubmit,
          className: "button font-color-dark-blue rounded-border center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Submit!")));
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, "woot!")));
      }
    }
  }]);

  return SubmitSolutionPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(SubmitSolutionPage));

/***/ })

})
//# sourceMappingURL=[id].js.76bdd5be2f155916f207.hot-update.js.map