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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCompetitionSelectChange", function (e) {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleIntegerAChange", function (e) {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleIntegerBChange", function (e) {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleIntegerCChange", function (e) {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleAlgorandAddressChange", function (e) {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleNameChange", function (e) {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleEmailChange", function (e) {});

    var router = _this.props.router;
    _this.state = {
      isSubmitted: false,
      selectedCompetition: router.query.id,
      integerA: 0,
      integerB: 0,
      integerC: 0,
      algorandAddress: "",
      submitterName: "",
      submitterEmail: ""
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
            lineNumber: 52
          },
          __self: this
        }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, __jsx("p", {
          className: "margin-top-lrg font-color-yellow font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "Solve The Diophantine Equation for 114"), __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx("p", {
          className: "margin-top-med font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Which integer are you submitting a solution for?"), __jsx("select", {
          onChange: this.handleCompetitionSelectChange,
          name: "competition-select",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("option", {
          selected: this.state.selectedCompetition == 6,
          value: "6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "6"), __jsx("option", {
          selected: this.state.selectedCompetition == 114,
          value: "114",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "114"), __jsx("option", {
          selected: this.state.selectedCompetition == 165,
          value: "165",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "165"), __jsx("option", {
          selected: this.state.selectedCompetition == 390,
          value: "390",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "390"), __jsx("option", {
          selected: this.state.selectedCompetition == 579,
          value: "579",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "579"), __jsx("option", {
          selected: this.state.selectedCompetition == 627,
          value: "627",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "627"), __jsx("option", {
          selected: this.state.selectedCompetition == 633,
          value: "633",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "633"), __jsx("option", {
          selected: this.state.selectedCompetition == 732,
          value: "732",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, "732"), __jsx("option", {
          selected: this.state.selectedCompetition == 906,
          value: "906",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "906"), __jsx("option", {
          selected: this.state.selectedCompetition == 921,
          value: "921",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "921"), __jsx("option", {
          selected: this.state.selectedCompetition == 975,
          value: "975",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, "975")), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Submit answer to the diophantine puzzle a\xB3 + b\xB3 + c\xB3 = 114"), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "What three integers can you sum the cubes of to get 114?"), __jsx("div", {
          className: "margin-top-med columns-parent-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx("div", {
          className: "column-30-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "Integer a:"), __jsx("div", {
          className: "column-70-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, __jsx("input", {
          onChange: this.handleIntegerAChange,
          className: "rounded-border green-border background-light-blue",
          type: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }))), __jsx("div", {
          className: "columns-parent-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, __jsx("div", {
          className: "column-30-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Integer b:"), __jsx("div", {
          className: "column-70-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx("input", {
          onChange: this.handleIntegerBChange,
          className: "rounded-border green-border background-light-blue",
          type: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }))), __jsx("div", {
          className: "columns-parent-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx("div", {
          className: "column-30-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "Integer c:"), __jsx("div", {
          className: "column-70-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("input", {
          onChange: this.handleIntegerCChange,
          className: "rounded-border green-border background-light-blue",
          type: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }))), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "If you\u2019ve found the solution, we\u2019ll send you the 32 Algos in the escrow prize pool."), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, "What is your Algorand address?"), __jsx("input", {
          onChange: this.handleAlgorandAddressChange,
          className: "margin-top-sml rounded-border green-border background-light-blue",
          type: "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, "What should we call you when we display you on the leaderboard?"), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "What is your name?"), __jsx("input", {
          onChange: this.handleNameChange,
          className: "margin-top-sml rounded-border green-border background-light-blue",
          type: "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, "It may take a little bit to verify but we'll email you when we're done."), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, "What is your email?"), __jsx("input", {
          onChange: this.handleEmailChange,
          className: "margin-top-sml rounded-border green-border background-light-blue",
          type: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        })), __jsx("div", {
          onClick: this.handleSubmit,
          className: "button font-color-dark-blue rounded-border center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, "Submit!")));
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
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
//# sourceMappingURL=[id].js.ab725d6a0a9a721a0034.hot-update.js.map