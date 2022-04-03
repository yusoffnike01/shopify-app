webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/tengku/sample-shopify-app/pages/index.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false
  }),
      modal = _useState[0],
      setModal = _useState[1];

  var emptystate = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');

  var handleSelection = function handleSelection(resources) {
    var idsFromResources = resources.selection.map(function (resource) {
      return resource.id;
    });
    setModal({
      open: false
    });
    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', idsFromResources);
    console.log('this is product ids', store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids'));
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 1
    }
  }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: modal.open,
    onCancel: function onCancel() {
      return setModal({
        open: false
      });
    },
    onSelection: function onSelection(resources) {
      return handleSelection(resources);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 3
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    heading: "Manage your inventory transfers",
    action: {
      content: 'Select Product',
      onAction: function onAction() {
        return setModal({
          open: true
        });
      }
    },
    image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Select Products"))));
};

_s(Index, "f7CifFnnWExm9FbIJCvfxx3/EL4=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJtb2RhbCIsInNldE1vZGFsIiwiZW1wdHlzdGF0ZSIsInN0b3JlIiwiZ2V0IiwiaGFuZGxlU2VsZWN0aW9uIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInJlc291cmNlIiwiaWQiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm9uQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRSxTQUFQQSxLQUFPLEdBQUk7QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQztBQUFDQyxRQUFJLEVBQUU7QUFBUCxHQUFELENBRG5CO0FBQUEsTUFDUkMsS0FEUTtBQUFBLE1BQ0RDLFFBREM7O0FBR2YsTUFBTUMsVUFBVSxHQUFHLENBQUNDLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLENBQXBCOztBQUNBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQ3JDLFFBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLEVBQWI7QUFBQSxLQUFoQyxDQUF6QjtBQUNBVixZQUFRLENBQUM7QUFBQ0YsVUFBSSxFQUFFO0FBQVAsS0FBRCxDQUFSO0FBQ0FJLG1EQUFLLENBQUNTLEdBQU4sQ0FBVSxLQUFWLEVBQWlCTCxnQkFBakI7QUFDQU0sV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNYLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLENBQW5DO0FBRUQsR0FORDs7QUFPQSxTQUNGLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0VBQUQ7QUFDRSxnQkFBWSxFQUFDLFNBRGY7QUFFRSxnQkFBWSxFQUFFLEtBRmhCO0FBR0UsUUFBSSxFQUFFSixLQUFLLENBQUNELElBSGQ7QUFJRSxZQUFRLEVBQUU7QUFBQSxhQUFJRSxRQUFRLENBQUM7QUFBQ0YsWUFBSSxFQUFFO0FBQVAsT0FBRCxDQUFaO0FBQUEsS0FKWjtBQUtFLGVBQVcsRUFBRyxxQkFBQ08sU0FBRDtBQUFBLGFBQWFELGVBQWUsQ0FBQ0MsU0FBRCxDQUE1QjtBQUFBLEtBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDQyxXQUFPLEVBQUMsaUNBRFQ7QUFFQyxVQUFNLEVBQUU7QUFBQ1MsYUFBTyxFQUFFLGdCQUFWO0FBQ1JDLGNBQVEsRUFBRTtBQUFBLGVBQUlmLFFBQVEsQ0FBQztBQUFDRixjQUFJLEVBQUU7QUFBUCxTQUFELENBQVo7QUFBQTtBQURGLEtBRlQ7QUFLQyxTQUFLLEVBQUMsNkVBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEYsQ0FERixDQVJGLENBREU7QUFxQkQsQ0FoQ0Q7O0dBQU1GLEs7O0tBQUFBLEs7QUFrQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhMDRmZTdkM2UyM2E4NGM1ODMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2UgfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcblxuY29uc3QgSW5kZXggPSgpPT57XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoe29wZW46IGZhbHNlfSk7XG5cbiAgY29uc3QgZW1wdHlzdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpO1xuICBjb25zdCBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XG4gICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKHJlc291cmNlID0+IHJlc291cmNlLmlkKTtcbiAgICBzZXRNb2RhbCh7b3BlbjogZmFsc2V9KTtcbiAgICBzdG9yZS5zZXQoJ2lkcycsIGlkc0Zyb21SZXNvdXJjZXMpOyBcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBwcm9kdWN0IGlkcycsIHN0b3JlLmdldCgnaWRzJykpO1xuICBcbiAgfVxuICByZXR1cm4oXG48UGFnZT5cbiAgPFJlc291cmNlUGlja2VyIFxuICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgb3Blbj17bW9kYWwub3Blbn1cbiAgICBvbkNhbmNlbD17KCk9PnNldE1vZGFsKHtvcGVuOiBmYWxzZX0pfVxuICAgIG9uU2VsZWN0aW9uPSB7KHJlc291cmNlcyk9PmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAvPlxuICA8TGF5b3V0PlxuICAgIDxFbXB0eVN0YXRlXG4gICAgIGhlYWRpbmc9XCJNYW5hZ2UgeW91ciBpbnZlbnRvcnkgdHJhbnNmZXJzXCJcbiAgICAgYWN0aW9uPXt7Y29udGVudDogJ1NlbGVjdCBQcm9kdWN0JyxcbiAgICAgb25BY3Rpb246ICgpPT5zZXRNb2RhbCh7b3BlbjogdHJ1ZX0pfVxuICAgIH1cbiAgICAgaW1hZ2U9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDI2Mi80MDcxLzI3MjYvZmlsZXMvZW1wdHlzdGF0ZS1maWxlcy5wbmdcIlxuICAgID5cbiAgICAgIDxwPlNlbGVjdCBQcm9kdWN0czwvcD5cbiAgICA8L0VtcHR5U3RhdGU+XG4gICAgPC9MYXlvdXQ+XG48L1BhZ2U+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9