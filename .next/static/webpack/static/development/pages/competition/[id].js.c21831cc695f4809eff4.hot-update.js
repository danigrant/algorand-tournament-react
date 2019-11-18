webpackHotUpdate("static/development/pages/competition/[id].js",{

/***/ "./pages/competition/[id].js":
/*!***********************************!*\
  !*** ./pages/competition/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);










var _jsxFileName = "/Users/danigrant/Projects/algorand-react/pages/competition/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;





var SubmitSolutionPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(SubmitSolutionPage, _React$Component);

  function SubmitSolutionPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SubmitSolutionPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(SubmitSolutionPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleCompetitionSelectChange", function (e) {
      _this.setState({
        selectedCompetition: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleIntegerAChange", function (e) {
      _this.setState({
        integerA: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleIntegerBChange", function (e) {
      _this.setState({
        integerB: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleIntegerCChange", function (e) {
      _this.setState({
        integerC: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAlgorandAddressChange", function (e) {
      _this.setState({
        algorandAddress: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleNameChange", function (e) {
      _this.setState({
        submitterName: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleEmailChange", function (e) {
      _this.setState({
        submitterEmail: e.target.value
      });
    });

    var router = _this.props.router;
    _this.state = {
      isSubmitted: false,
      selectedCompetition: router.query.id,
      integerA: 0,
      integerB: 0,
      integerC: 0,
      algorandAddress: "",
      submitterName: "",
      submitterEmail: "",
      submitResponse: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SubmitSolutionPage, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, json;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  isSubmitted: true
                });
                _context.next = 3;
                return fetch("https://algorand-tournament-server.herokuapp.com/competition/".concat(this.state.selectedCompetition), {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                    a: this.state.integerA,
                    b: this.state.integerB,
                    c: this.state.integerC,
                    algorandAddress: this.state.algorandAddress,
                    submitterName: this.state.submitterName,
                    submitterEmail: this.state.submitterEmail
                  })
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                json = _context.sent;
                this.setState({
                  submitResponse: json
                });
                console.log(json);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit() {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      var router = this.props.router;

      if (!this.state.isSubmitted) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, __jsx("p", {
          className: "margin-top-lrg font-color-yellow font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "Solve The Diophantine Equation for ", router.query.id), __jsx("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("p", {
          className: "margin-top-med font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Which integer are you submitting a solution for?"), __jsx("select", {
          onChange: this.handleCompetitionSelectChange,
          name: "competition-select",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx("option", {
          selected: this.state.selectedCompetition == 6,
          value: "6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, "6"), __jsx("option", {
          selected: this.state.selectedCompetition == 114,
          value: "114",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, "114"), __jsx("option", {
          selected: this.state.selectedCompetition == 165,
          value: "165",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "165"), __jsx("option", {
          selected: this.state.selectedCompetition == 390,
          value: "390",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, "390"), __jsx("option", {
          selected: this.state.selectedCompetition == 579,
          value: "579",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "579"), __jsx("option", {
          selected: this.state.selectedCompetition == 627,
          value: "627",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "627"), __jsx("option", {
          selected: this.state.selectedCompetition == 633,
          value: "633",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "633"), __jsx("option", {
          selected: this.state.selectedCompetition == 732,
          value: "732",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, "732"), __jsx("option", {
          selected: this.state.selectedCompetition == 906,
          value: "906",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "906"), __jsx("option", {
          selected: this.state.selectedCompetition == 921,
          value: "921",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, "921"), __jsx("option", {
          selected: this.state.selectedCompetition == 975,
          value: "975",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "975")), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, "Submit answer to the diophantine puzzle a\xB3 + b\xB3 + c\xB3 = 114"), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, "What three integers can you sum the cubes of to get 114?"), __jsx("div", {
          className: "margin-top-med columns-parent-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, __jsx("div", {
          className: "column-30-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "Integer a:"), __jsx("div", {
          className: "column-70-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, __jsx("input", {
          onChange: this.handleIntegerAChange,
          className: "rounded-border green-border background-light-blue",
          type: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }))), __jsx("div", {
          className: "columns-parent-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, __jsx("div", {
          className: "column-30-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, "Integer b:"), __jsx("div", {
          className: "column-70-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, __jsx("input", {
          onChange: this.handleIntegerBChange,
          className: "rounded-border green-border background-light-blue",
          type: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }))), __jsx("div", {
          className: "columns-parent-div",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, __jsx("div", {
          className: "column-30-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, "Integer c:"), __jsx("div", {
          className: "column-70-p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, __jsx("input", {
          onChange: this.handleIntegerCChange,
          className: "rounded-border green-border background-light-blue",
          type: "number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }))), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "If you\u2019ve found the solution, we\u2019ll send you the 32 Algos in the escrow prize pool."), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, "What is your Algorand address?"), __jsx("input", {
          onChange: this.handleAlgorandAddressChange,
          className: "margin-top-sml rounded-border green-border background-light-blue",
          type: "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, "What should we call you when we display you on the leaderboard?"), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "What is your name?"), __jsx("input", {
          onChange: this.handleNameChange,
          className: "margin-top-sml rounded-border green-border background-light-blue",
          type: "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }), __jsx("p", {
          className: "margin-bottom-none font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, "It may take a little bit to verify but we'll email you when we're done."), __jsx("p", {
          className: "margin-top-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, "What is your email?"), __jsx("input", {
          onChange: this.handleEmailChange,
          className: "margin-top-sml rounded-border green-border background-light-blue",
          type: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        })), __jsx("div", {
          onClick: this.handleSubmit,
          className: "button font-color-dark-blue rounded-border center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, "Submit!")));
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, "woot!"), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.state.submitResponse)));
      }
    }
  }]);

  return SubmitSolutionPage;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(SubmitSolutionPage));

/***/ })

})
//# sourceMappingURL=[id].js.c21831cc695f4809eff4.hot-update.js.map