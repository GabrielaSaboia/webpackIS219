/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/models/TableGenerator.js":
/*!*****************************************!*\
  !*** ./server/models/TableGenerator.js ***!
  \*****************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TableGenerator = /*#__PURE__*/function () {
  function TableGenerator() {
    _classCallCheck(this, TableGenerator);
  }

  _createClass(TableGenerator, null, [{
    key: "generateTableHead",
    value: function generateTableHead(table, data) {
      var thead = table.createTHead();
      var row = thead.insertRow();
      var values = Object.values(data);
      console.log(values);
      values.forEach(function (value) {
        var th = document.createElement('th');
        var text = document.createTextNode(value);
        th.appendChild(text);
        row.appendChild(th);
      });
    }
  }, {
    key: "generateTable",
    value: function generateTable(table, data) {
      data.forEach(function (record) {
        var row = table.insertRow();
        console.log(record);
        var values = Object.values(record);
        values.forEach(function (value) {
          var cell = row.insertCell();
          var text = document.createTextNode(value);
          cell.appendChild(text);
        });
      });
    }
  }]);

  return TableGenerator;
}();

module.exports = TableGenerator;

/***/ }),

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/MyAlert.js":
/*!***************************!*\
  !*** ./src/js/MyAlert.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyAlert)
/* harmony export */ });
function MyAlert(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
  console.log('Loaded');
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
var XMLHttpRequest = __webpack_require__(/*! xhr2 */ "./node_modules/xhr2/lib/browser.js");

function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
}

/***/ }),

/***/ "./node_modules/xhr2/lib/browser.js":
/*!******************************************!*\
  !*** ./node_modules/xhr2/lib/browser.js ***!
  \******************************************/
/***/ ((module) => {

module.exports = XMLHttpRequest;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
/* harmony import */ var _MyAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyAlert */ "./src/js/MyAlert.js");
/* harmony import */ var _server_models_TableGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/models/TableGenerator */ "./server/models/TableGenerator.js");
/* harmony import */ var _server_models_TableGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_server_models_TableGenerator__WEBPACK_IMPORTED_MODULE_4__);





(0,_TestJs__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    (0,_MyAlert__WEBPACK_IMPORTED_MODULE_3__.default)("Something went wrong: ".concat(err));
  } else {
    var table = document.querySelector('table');
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    _server_models_TableGenerator__WEBPACK_IMPORTED_MODULE_4___default().generateTableHead(table, data);
    _server_models_TableGenerator__WEBPACK_IMPORTED_MODULE_4___default().generateTable(table, dataRecords);
  }
});
(0,_ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__.default)('this worked in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc2VydmVyL21vZGVscy9UYWJsZUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL015QWxlcnQuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9UZXN0SnMuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9nZXRKU09OLmpzIiwid2VicGFjazovL3VudGl0bGVkMTMvLi9ub2RlX21vZHVsZXMveGhyMi9saWIvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRhYmxlR2VuZXJhdG9yIiwidGFibGUiLCJkYXRhIiwidGhlYWQiLCJjcmVhdGVUSGVhZCIsInJvdyIsImluc2VydFJvdyIsInZhbHVlcyIsIk9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwidmFsdWUiLCJ0aCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwicmVjb3JkIiwiY2VsbCIsImluc2VydENlbGwiLCJtb2R1bGUiLCJleHBvcnRzIiwiQ29uc29sZUxvZ0l0IiwibWVzc2FnZSIsIk15QWxlcnQiLCJUZXN0SlMiLCJYTUxIdHRwUmVxdWVzdCIsInJlcXVpcmUiLCJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiZXJyIiwicmVjb3JkcyIsInF1ZXJ5U2VsZWN0b3IiLCJrZXlzIiwiZGF0YVJlY29yZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxjOzs7Ozs7O1dBQ0osMkJBQXlCQyxLQUF6QixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFDcEMsVUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLFdBQU4sRUFBZDtBQUNBLFVBQU1DLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxTQUFOLEVBQVo7QUFDQSxVQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBUCxDQUFjTCxJQUFkLENBQWY7QUFDQU8sYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQUEsWUFBTSxDQUFDSSxPQUFQLENBQWUsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLFlBQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQSxZQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QkwsS0FBeEIsQ0FBYjtBQUNBQyxVQUFFLENBQUNLLFdBQUgsQ0FBZUYsSUFBZjtBQUNBWCxXQUFHLENBQUNhLFdBQUosQ0FBZ0JMLEVBQWhCO0FBQ0QsT0FMRDtBQU1EOzs7V0FFRCx1QkFBcUJaLEtBQXJCLEVBQTRCQyxJQUE1QixFQUFrQztBQUNoQ0EsVUFBSSxDQUFDUyxPQUFMLENBQWEsVUFBQ1EsTUFBRCxFQUFZO0FBQ3ZCLFlBQU1kLEdBQUcsR0FBR0osS0FBSyxDQUFDSyxTQUFOLEVBQVo7QUFDQUcsZUFBTyxDQUFDQyxHQUFSLENBQVlTLE1BQVo7QUFDQSxZQUFNWixNQUFNLEdBQUdDLE1BQU0sQ0FB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LEdBQUdILE9BQU8sQ0FBQ3ZDLElBQTVCO0FBRUFGLDBGQUFBLENBQWlDQyxLQUFqQyxFQUF3Q0MsSUFBeEM7QUFDQUYsc0ZBQUEsQ0FBNkJDLEtBQTdCLEVBQW9DMkMsV0FBcEM7QUFDRDtBQUNGLENBWkksQ0FBUDtBQWFBcEIsc0RBQVksQ0FBQywyQkFBRCxDQUFaLEMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGFibGVHZW5lcmF0b3Ige1xuICBzdGF0aWMgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcbiAgICBjb25zdCB0aGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XG4gICAgY29uc3Qgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcbiAgICAgIHRoLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKHRoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhKSB7XG4gICAgZGF0YS5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xuICAgICAgY29uc29sZS5sb2cocmVjb3JkKTtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocmVjb3JkKTtcbiAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFRhYmxlR2VuZXJhdG9yO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc29sZUxvZ0l0KG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFsZXJ0KG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SlMoKSB7XG4gIGNvbnNvbGUubG9nKCdMb2FkZWQnKTtcbn1cbiIsImNvbnN0IFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneGhyMicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB4aHI7XG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XG4gICAgfVxuICB9O1xuICB4aHIuc2VuZCgpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBYTUxIdHRwUmVxdWVzdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGVzdEpTIGZyb20gJy4vVGVzdEpzJztcbmltcG9ydCBDb25zb2xlTG9nSXQgZnJvbSAnLi9Db25zb2xlTG9nSXQnO1xuaW1wb3J0IGdldEpTT04gZnJvbSAnLi9nZXRKU09OJztcbmltcG9ydCBNeUFsZXJ0IGZyb20gJy4vTXlBbGVydCc7XG5pbXBvcnQgVGFibGVHZW5lcmF0b3IgZnJvbSAnLi4vLi4vc2VydmVyL21vZGVscy9UYWJsZUdlbmVyYXRvcic7XG5cblRlc3RKUygpO1xuZ2V0SlNPTignJywgKGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59KTtcblxuZ2V0SlNPTignaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9jaXRpZXMnLFxuICAoZXJyLCByZWNvcmRzKSA9PiB7XG4gICAgaWYgKGVyciAhPT0gbnVsbCkge1xuICAgICAgTXlBbGVydChgU29tZXRoaW5nIHdlbnQgd3Jvbmc6ICR7ZXJyfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmtleXMoKHJlY29yZHMuZGF0YVswXSkpO1xuICAgICAgY29uc3QgZGF0YVJlY29yZHMgPSByZWNvcmRzLmRhdGE7XG5cbiAgICAgIFRhYmxlR2VuZXJhdG9yLmdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTtcbiAgICAgIFRhYmxlR2VuZXJhdG9yLmdlbmVyYXRlVGFibGUodGFibGUsIGRhdGFSZWNvcmRzKTtcbiAgICB9XG4gIH0pO1xuQ29uc29sZUxvZ0l0KCd0aGlzIHdvcmtlZCBpbiB0aGUgYnVuZGxlJyk7XG4iXSwic291cmNlUm9vdCI6IiJ9