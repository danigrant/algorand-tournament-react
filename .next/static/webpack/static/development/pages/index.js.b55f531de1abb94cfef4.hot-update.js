webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");

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

function saveSolutionToDB() {
  return _saveSolutionToDB.apply(this, arguments);
} // let snapshot = await usersRef.where('email', '==', email).get()


function _saveSolutionToDB() {
  _saveSolutionToDB = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _saveSolutionToDB.apply(this, arguments);
}

function getCompetitions() {
  return _getCompetitions.apply(this, arguments);
}

function _getCompetitions() {
  _getCompetitions = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2() {
    var snapshot, data;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return competitionsRef.orderBy('number').get();

          case 2:
            snapshot = _context2.sent;
            data = [];
            _context2.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
              data.push({
                "number": docData.number,
                "algorandEscrowAddress": docData.algorandEscrowAddress,
                "isSolved": docData.isSolved,
                "solverName": docData.solverName ? docData.solverName : undefined,
                "solution": docData.solution ? docData.solution : {},
                "solveDate": docData.solveDate ? docData.solveDate : undefined
              });
            });

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
//# sourceMappingURL=index.js.b55f531de1abb94cfef4.hot-update.js.map