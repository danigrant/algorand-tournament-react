webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var _algorand = __webpack_require__(/*! ./algorand */ "./utils/algorand.js");

var firebase = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");

var firebaseConfig = {
  apiKey: "AIzaSyCcpy1r2a5s99VAM4D4nLhYKhjmERRBriU",
  authDomain: "algorand-tournament.firebaseapp.com",
  databaseURL: "https://algorand-tournament.firebaseio.com",
  projectId: "algorand-tournament",
  storageBucket: "algorand-tournament.appspot.com",
  messagingSenderId: "283477236370",
  appId: "1:283477236370:web:c7558718f40fabd7cf244b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();
var competitionsRef = db.collection('competitions');

function getCompetitions() {
  return _getCompetitions.apply(this, arguments);
}

function _getCompetitions() {
  _getCompetitions = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var snapshot, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return competitionsRef.orderBy('number').get();

          case 2:
            snapshot = _context2.sent;
            data = [];
            _context2.next = 6;
            return snapshot.forEach(
            /*#__PURE__*/
            function () {
              var _ref = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(doc) {
                var docData;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        docData = doc.data(); // get balance of that address
                        // let algoBalance = await getAlgorandAddressBalance(docData.algorandEscrowAddress)

                        data.push({
                          "number": docData.number,
                          "algorandEscrowAddress": docData.algorandEscrowAddress,
                          // "balance": algoBalance,
                          "isSolved": docData.isSolved,
                          "solverName": docData.solverName ? docData.solverName : undefined,
                          "solution": docData.solution ? docData.solution : {},
                          "solveDate": docData.solveDate ? docData.solveDate : undefined
                        });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());

          case 6:
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCompetitions.apply(this, arguments);
}

module.exports = {
  getCompetitions: getCompetitions
};

/***/ })

})
//# sourceMappingURL=index.js.c919f66366dae1660856.hot-update.js.map