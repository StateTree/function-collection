(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("functions", [], factory);
	else if(typeof exports === 'object')
		exports["functions"] = factory();
	else
		root["functions"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ticker", [], factory);
	else if(typeof exports === 'object')
		exports["ticker"] = factory();
	else
		root["ticker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TickEntry = __webpack_require__(1);

var _TickEntry2 = _interopRequireDefault(_TickEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TickEntry2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Manager = __webpack_require__(2);

var _Manager2 = _interopRequireDefault(_Manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// toDo: support both callback and promise
var TickEntry =
/**
 * @param {object} context - The "this" argument for the listener function.
 * @param {function} listener.
 */
function TickEntry(context, listener) {
	var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	_classCallCheck(this, TickEntry);

	this.context = context;
	this.listener = listener;
	this.callback = callback;
	this.priority = priority;
};

/*---- Public|Prototype Methods ---*/

exports.default = TickEntry;
TickEntry.prototype.dispose = function () {
	this.context = null;
	this.listener = null;
	this.callback = null;
	this.priority = null;
};

TickEntry.prototype.execute = function () {
	_Manager2.default.add(this);
};

TickEntry.prototype.getMaxPriority = function () {
	return _Manager2.default.getMaxPriority();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestAnimationFrameId = NaN;
var priorityEntries = [null, null, null, null];

function onTick() {
	for (var index = 0; index < priorityEntries.length; index++) {
		var tickEntries = priorityEntries[index];
		if (tickEntries && tickEntries.length > 0) {
			executeTickEntries(tickEntries);
			//Clear them once executed
			priorityEntries[index] = null;
		}
	}
}

function executeTickEntries(tickEntries) {
	tickEntries.map(function (tickEntry, index) {
		tickEntry.listener.call(tickEntry.context || tickEntry.listener['this']);
		if (tickEntry.callback) {
			tickEntry.callback.call(tickEntry.callback['this']);
		}
	});
}

function requestAnimationFrameCallback() {
	onTick();
	requestAnimationFrameId = window.requestAnimationFrame(requestAnimationFrameCallback);
}

var TickManager = function TickManager() {
	_classCallCheck(this, TickManager);

	requestAnimationFrameId = 0; // for Windows Env
	this.start();
};

TickManager.prototype.add = function (tickEntry) {
	var priority = tickEntry.priority;

	if (!priorityEntries[priority]) {
		priorityEntries[priority] = [];
	}
	var tickEntries = priorityEntries[priority];
	tickEntries.push(tickEntry); // todo: Stack or Queue
};

// Todo: Support for NodeJS 
TickManager.prototype.start = function () {
	if (window) {
		// will receives timestamp as argument
		//todo: Learn:  the purpose of timestamp
		requestAnimationFrameId = window.requestAnimationFrame(requestAnimationFrameCallback);
	}
};

TickManager.prototype.stop = function () {
	if (window) {
		window.cancelAnimationFrame(requestAnimationFrameId);
	}
};

TickManager.prototype.getMaxPriority = function () {
	return priorityEntries.length - 1;
};

var singletonInstance = new TickManager();

exports.default = singletonInstance;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMDFhYjYzNDc1M2FhZmRjM2ViNCIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RpY2tFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUaWNrRW50cnkiLCJjb250ZXh0IiwibGlzdGVuZXIiLCJjYWxsYmFjayIsInByaW9yaXR5IiwicHJvdG90eXBlIiwiZGlzcG9zZSIsImV4ZWN1dGUiLCJhZGQiLCJnZXRNYXhQcmlvcml0eSIsInJlcXVlc3RBbmltYXRpb25GcmFtZUlkIiwiTmFOIiwicHJpb3JpdHlFbnRyaWVzIiwib25UaWNrIiwiaW5kZXgiLCJsZW5ndGgiLCJ0aWNrRW50cmllcyIsImV4ZWN1dGVUaWNrRW50cmllcyIsIm1hcCIsInRpY2tFbnRyeSIsImNhbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIlRpY2tNYW5hZ2VyIiwic3RhcnQiLCJwdXNoIiwic3RvcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2luZ2xldG9uSW5zdGFuY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1D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aUJQLFNBQWpCLEVBTmdELENBTW5CO0FBQzdCLENBUEQ7O0FBVUE7QUFDQUssWUFBWW5CLFNBQVosQ0FBc0JvQixLQUF0QixHQUE4QixZQUFZO0FBQ3pDLEtBQUdILE1BQUgsRUFBVTtBQUNUO0FBQ0E7QUFDQVosNEJBQTBCWSxPQUFPQyxxQkFBUCxDQUE2QkYsNkJBQTdCLENBQTFCO0FBQ0E7QUFDRCxDQU5EOztBQVNBRyxZQUFZbkIsU0FBWixDQUFzQnNCLElBQXRCLEdBQTZCLFlBQVk7QUFDeEMsS0FBR0wsTUFBSCxFQUFVO0FBQ1RBLFNBQU9NLG9CQUFQLENBQTRCbEIsdUJBQTVCO0FBQ0E7QUFDRCxDQUpEOztBQU1BYyxZQUFZbkIsU0FBWixDQUFzQkksY0FBdEIsR0FBdUMsWUFBWTtBQUNsRCxRQUFPRyxnQkFBZ0JHLE1BQWhCLEdBQXlCLENBQWhDO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNYyxvQkFBb0IsSUFBSUwsV0FBSixFQUExQjs7a0JBRWVLLGlCIiwiZmlsZSI6ImxpYi90aWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIwMWFiNjM0NzUzYWFmZGMzZWI0IiwiaW1wb3J0IFRpY2tlciBmcm9tICcuL1RpY2tFbnRyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IFRpY2tlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsImltcG9ydCBtYW5hZ2VyIGZyb20gJy4vTWFuYWdlcic7XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja0VudHJ5XG57XG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBcInRoaXNcIiBhcmd1bWVudCBmb3IgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbnRleHQsIGxpc3RlbmVyLCBjYWxsYmFjayA9IG51bGwsIHByaW9yaXR5ID0gMClcblx0e1xuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdFx0dGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXHRcdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdH1cblxufVxuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdHRoaXMubGlzdGVuZXIgPSBudWxsO1xuXHR0aGlzLmNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5wcmlvcml0eSA9IG51bGw7XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbigpe1xuXHRtYW5hZ2VyLmFkZCh0aGlzKTtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZ2V0TWF4UHJpb3JpdHkgPSBmdW5jdGlvbigpe1xuXHRyZXR1cm4gbWFuYWdlci5nZXRNYXhQcmlvcml0eSgpO1xufTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvVGlja0VudHJ5LmpzIiwiXG5sZXQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSBOYU47XG5sZXQgcHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuXG5mdW5jdGlvbiBvblRpY2soKXtcblx0Zm9yKGxldCBpbmRleCA9IDAgOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4Kyspe1xuXHRcdGxldCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKTtcblx0XHRcdC8vQ2xlYXIgdGhlbSBvbmNlIGV4ZWN1dGVkXG5cdFx0XHRwcmlvcml0eUVudHJpZXNbaW5kZXhdID0gbnVsbDtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKXtcblx0dGlja0VudHJpZXMubWFwKCAodGlja0VudHJ5ICwgaW5kZXggKT0+IHtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCl7XG5cdG9uVGljaygpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xufVxuXG5jbGFzcyBUaWNrTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gMDsgLy8gZm9yIFdpbmRvd3MgRW52XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcblx0fVxufVxuXG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGlja0VudHJ5KSB7XG5cdGNvbnN0IHsgcHJpb3JpdHkgfSA9IHRpY2tFbnRyeTtcblx0aWYoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pe1xuXHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0fVxuXHRjb25zdCB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTsgLy8gdG9kbzogU3RhY2sgb3IgUXVldWVcbn07XG5cblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZih3aW5kb3cpe1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmKHdpbmRvdyl7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcHJpb3JpdHlFbnRyaWVzLmxlbmd0aCAtIDE7XG59O1xuXG5jb25zdCBzaW5nbGV0b25JbnN0YW5jZSA9IG5ldyBUaWNrTWFuYWdlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25JbnN0YW5jZTtcblxuXG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL01hbmFnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functions = __webpack_require__(2);

var _functions2 = _interopRequireDefault(_functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _functions2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _entry = __webpack_require__(3);

var _entry2 = _interopRequireDefault(_entry);

var _ticker = __webpack_require__(0);

var _ticker2 = _interopRequireDefault(_ticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Functions = function Functions() {
				_classCallCheck(this, Functions);

				this.entries = [];
				this.frameEntries = [];
				this.executingLaterInNextTickCount = 0;
};

exports.default = Functions;


Functions.prototype.addListener = function (context, func) {
				var executeLaterInNextTick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

				var _this = this;

				var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
				var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

				var entry = void 0;
				if (executeLaterInNextTick) {

								var tickerCallback = function tickerCallback() {
												_this.executingLaterInNextTickCount = _this.executingLaterInNextTickCount - 1;
												if (callback) {
																callback.call(callback['this']);
												}
								};
								var ticker = new _ticker2.default(context, func, tickerCallback, priority);
								entry = new _entry2.default(ticker, ticker.execute);
								this.frameEntries.push(entry);
				} else {
								entry = new _entry2.default(context, func);
								this.entries.push(entry);
				}
};

Functions.prototype.removeListener = function (context, func) {
				var _this2 = this;

				var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

				var entry = void 0,
				    i = void 0;
				var frameEntries = this.frameEntries,
				    entries = this.entries;


				for (i = 0; i < frameEntries.length; i++) {
								var frameEntry = frameEntries[i];
								entry = frameEntry.context;
								if (entry.context === context && entry.listener === func) {
												if (this.executingLaterInNextTickCount === 0) {
																frameEntry.dispose();
												} else {
																var tickerCallback = function tickerCallback() {
																				_this2.executingLaterInNextTickCount = _this2.executingLaterInNextTickCount - 1;
																				callback && callback();
																};
																var ticker = new _ticker2.default(frameEntry, frameEntry.dispose, tickerCallback, 3);
																ticker.execute();
																this.executingLaterInNextTickCount = this.executingLaterInNextTickCount + 1;
												}
												return;
								}
				}

				for (i = 0; i < entries.length; i++) {
								entry = entries[i];
								if (entry.context === context && entry.listener === func) {
												entry.dispose();
												return;
								}
				}
};

Functions.prototype.triggerListeners = function () {
				var entriesIndexToDispose = [];

				this.entries.forEach(function (entry, index) {
								if (entry.listener) {
												entry.listener.apply(entry.context || entry.listener['this']);
								} else {
												entriesIndexToDispose.push(index);
								}
				});

				entriesIndexToDispose.forEach(function (entryIndex) {
								this.entries.splice(entryIndex, 1);
				}, this);

				this.frameEntries.forEach(function (entry, index) {
								if (entry.listener) {
												this.executingLaterInNextTickCount = this.executingLaterInNextTickCount + 1;
												entry.listener.apply(entry.context || entry.listener['this']);
								} else {
												entriesIndexToDispose.push(index);
								}
				}, this);
				entriesIndexToDispose.forEach(function (entryIndex) {
								this.frameEntries.splice(entryIndex, 1);
				}, this);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ticker = __webpack_require__(0);

var _ticker2 = _interopRequireDefault(_ticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entry = function Entry(context, func) {
    _classCallCheck(this, Entry);

    this.context = context;
    this.listener = func;
};

exports.default = Entry;


Entry.prototype.dispose = function () {
    if (this.context instanceof _ticker2.default) {
        this.context.dispose();
    }
    this.context = null;
    this.listener = null;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(1);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function immediateFunction() {
    console.log("I am Immediate Function");
    console.log(functions.executingLaterInNextTickCount);
}

function frameFunction() {
    console.log("I am Frame Function");
    console.log(functions.executingLaterInNextTickCount);
}

function frameFunctionSecond() {
    console.log("I am Frame Function Second");
    console.log(functions.executingLaterInNextTickCount);
}
var functions = new _lib2.default();
console.log(functions.executingLaterInNextTickCount);
functions.addListener(window, frameFunctionSecond, true, 1);
functions.addListener(window, frameFunction, true);
functions.addListener(window, immediateFunction);

console.log("trigger 1");

functions.triggerListeners();
// 2 entries

functions.removeListener(window, frameFunctionSecond, functions.triggerListeners.bind(functions));
// 3rd entry
functions.removeListener(window, immediateFunction);

console.log("trigger 2");
functions.triggerListeners();

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZDVhMGRmNTRjMDhiMTJiZjE1MCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2xpYi9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9ucyIsImVudHJpZXMiLCJmcmFtZUVudHJpZXMiLCJleGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCIsInByb3RvdHlwZSIsImFkZExpc3RlbmVyIiwiY29udGV4dCIsImZ1bmMiLCJleGVjdXRlTGF0ZXJJbk5leHRUaWNrIiwicHJpb3JpdHkiLCJjYWxsYmFjayIsImVudHJ5IiwidGlja2VyQ2FsbGJhY2siLCJjYWxsIiwidGlja2VyIiwiZXhlY3V0ZSIsInB1c2giLCJyZW1vdmVMaXN0ZW5lciIsImkiLCJsZW5ndGgiLCJmcmFtZUVudHJ5IiwibGlzdGVuZXIiLCJkaXNwb3NlIiwidHJpZ2dlckxpc3RlbmVycyIsImVudHJpZXNJbmRleFRvRGlzcG9zZSIsImZvckVhY2giLCJpbmRleCIsImFwcGx5IiwiZW50cnlJbmRleCIsInNwbGljZSIsIkVudHJ5IiwiaW1tZWRpYXRlRnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZnVuY3Rpb25zIiwiZnJhbWVGdW5jdGlvbiIsImZyYW1lRnVuY3Rpb25TZWNvbmQiLCJ3aW5kb3ciLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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Iiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdW5jdGlvbnNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZnVuY3Rpb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxZDVhMGRmNTRjMDhiMTJiZjE1MCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGlja2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVGlja0VudHJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9UaWNrRW50cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGlja0VudHJ5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RpY2tFbnRyeTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gdG9Ebzogc3VwcG9ydCBib3RoIGNhbGxiYWNrIGFuZCBwcm9taXNlXG52YXIgVGlja0VudHJ5ID1cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgXCJ0aGlzXCIgYXJndW1lbnQgZm9yIHRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyLlxuICovXG5mdW5jdGlvbiBUaWNrRW50cnkoY29udGV4dCwgbGlzdGVuZXIpIHtcblx0dmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXHR2YXIgcHJpb3JpdHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG5cblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tFbnRyeSk7XG5cblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0dGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbn07XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gVGlja0VudHJ5O1xuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHR0aGlzLmxpc3RlbmVyID0gbnVsbDtcblx0dGhpcy5jYWxsYmFjayA9IG51bGw7XG5cdHRoaXMucHJpb3JpdHkgPSBudWxsO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xuXHRfTWFuYWdlcjIuZGVmYXVsdC5hZGQodGhpcyk7XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gX01hbmFnZXIyLmRlZmF1bHQuZ2V0TWF4UHJpb3JpdHkoKTtcbn07XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSBOYU47XG52YXIgcHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuXG5mdW5jdGlvbiBvblRpY2soKSB7XG5cdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZiAodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKTtcblx0XHRcdC8vQ2xlYXIgdGhlbSBvbmNlIGV4ZWN1dGVkXG5cdFx0XHRwcmlvcml0eUVudHJpZXNbaW5kZXhdID0gbnVsbDtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKSB7XG5cdHRpY2tFbnRyaWVzLm1hcChmdW5jdGlvbiAodGlja0VudHJ5LCBpbmRleCkge1xuXHRcdHRpY2tFbnRyeS5saXN0ZW5lci5jYWxsKHRpY2tFbnRyeS5jb250ZXh0IHx8IHRpY2tFbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRpZiAodGlja0VudHJ5LmNhbGxiYWNrKSB7XG5cdFx0XHR0aWNrRW50cnkuY2FsbGJhY2suY2FsbCh0aWNrRW50cnkuY2FsbGJhY2tbJ3RoaXMnXSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2soKSB7XG5cdG9uVGljaygpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xufVxuXG52YXIgVGlja01hbmFnZXIgPSBmdW5jdGlvbiBUaWNrTWFuYWdlcigpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tNYW5hZ2VyKTtcblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuXHR0aGlzLnN0YXJ0KCk7XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHR9XG5cdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTsgLy8gdG9kbzogU3RhY2sgb3IgUXVldWVcbn07XG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0Ly90b2RvOiBMZWFybjogIHRoZSBwdXJwb3NlIG9mIHRpbWVzdGFtcFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmdldE1heFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcHJpb3JpdHlFbnRyaWVzLmxlbmd0aCAtIDE7XG59O1xuXG52YXIgc2luZ2xldG9uSW5zdGFuY2UgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2luZ2xldG9uSW5zdGFuY2U7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQmlNREZoWWpZek5EYzFNMkZoWm1Sak0yVmlOQ0lzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZiR2xpTDFScFkydEZiblJ5ZVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZUV0Z1WVdkbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKVWFXTnJSVzUwY25raUxDSmpiMjUwWlhoMElpd2liR2x6ZEdWdVpYSWlMQ0pqWVd4c1ltRmpheUlzSW5CeWFXOXlhWFI1SWl3aWNISnZkRzkwZVhCbElpd2laR2x6Y0c5elpTSXNJbVY0WldOMWRHVWlMQ0poWkdRaUxDSm5aWFJOWVhoUWNtbHZjbWwwZVNJc0luSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSWl3aVRtRk9JaXdpY0hKcGIzSnBkSGxGYm5SeWFXVnpJaXdpYjI1VWFXTnJJaXdpYVc1a1pYZ2lMQ0pzWlc1bmRHZ2lMQ0owYVdOclJXNTBjbWxsY3lJc0ltVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5SXNJbTFoY0NJc0luUnBZMnRGYm5SeWVTSXNJbU5oYkd3aUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheUlzSW5kcGJtUnZkeUlzSW5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTSXNJbFJwWTJ0TllXNWhaMlZ5SWl3aWMzUmhjblFpTENKd2RYTm9JaXdpYzNSdmNDSXNJbU5oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSWl3aWMybHVaMnhsZEc5dVNXNXpkR0Z1WTJVaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096czdPenM3T3pzN096czdPMEZETjBSQk96czdPenM3T3pzN096czdPenM3T3pzN08wRkRRVUU3T3pzN096czdPMEZCUlVFN1NVRkRjVUpCTEZNN1FVRkZjRUk3T3pzN1FVRkpRU3h0UWtGQldVTXNUMEZCV2l4RlFVRnhRa01zVVVGQmNrSXNSVUZEUVR0QlFVRkJMRXRCUkN0Q1F5eFJRVU12UWl4MVJVRkVNRU1zU1VGRE1VTTdRVUZCUVN4TFFVUm5SRU1zVVVGRGFFUXNkVVZCUkRKRUxFTkJRek5FT3p0QlFVRkJPenRCUVVORExFMUJRVXRJTEU5QlFVd3NSMEZCWlVFc1QwRkJaanRCUVVOQkxFMUJRVXRETEZGQlFVd3NSMEZCWjBKQkxGRkJRV2hDTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFrRXNVVUZCYUVJN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5CTEVNN08wRkJTVVk3TzJ0Q1FXaENjVUpLTEZNN1FVRnJRbkpDUVN4VlFVRlZTeXhUUVVGV0xFTkJRVzlDUXl4UFFVRndRaXhIUVVFNFFpeFpRVUZWTzBGQlEzWkRMRTFCUVV0TUxFOUJRVXdzUjBGQlpTeEpRVUZtTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSXNTVUZCYUVJN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENMRWxCUVdoQ08wRkJRMEVzUTBGTVJEczdRVUZQUVVvc1ZVRkJWVXNzVTBGQlZpeERRVUZ2UWtVc1QwRkJjRUlzUjBGQk9FSXNXVUZCVlR0QlFVTjJReXh0UWtGQlVVTXNSMEZCVWl4RFFVRlpMRWxCUVZvN1FVRkRRU3hEUVVaRU96dEJRVWxCVWl4VlFVRlZTeXhUUVVGV0xFTkJRVzlDU1N4alFVRndRaXhIUVVGeFF5eFpRVUZWTzBGQlF6bERMRkZCUVU4c2EwSkJRVkZCTEdOQlFWSXNSVUZCVUR0QlFVTkJMRU5CUmtRc1F6czdPenM3T3pzN096czdPenM3TzBGREwwSkJMRWxCUVVsRExEQkNRVUV3UWtNc1IwRkJPVUk3UVVGRFFTeEpRVUZKUXl4clFrRkJhMElzUTBGQlF5eEpRVUZFTEVWQlFVOHNTVUZCVUN4RlFVRmhMRWxCUVdJc1JVRkJiVUlzU1VGQmJrSXNRMEZCZEVJN08wRkJSVUVzVTBGQlUwTXNUVUZCVkN4SFFVRnBRanRCUVVOb1FpeE5RVUZKTEVsQlFVbERMRkZCUVZFc1EwRkJhRUlzUlVGQmIwSkJMRkZCUVZGR0xHZENRVUZuUWtjc1RVRkJOVU1zUlVGQmIwUkVMRTlCUVhCRUxFVkJRVFJFTzBGQlF6TkVMRTFCUVVsRkxHTkJRV05LTEdkQ1FVRm5Ra1VzUzBGQmFFSXNRMEZCYkVJN1FVRkRRU3hOUVVGSFJTeGxRVUZsUVN4WlFVRlpSQ3hOUVVGYUxFZEJRWEZDTEVOQlFYWkRMRVZCUVRCRE8wRkJRM3BEUlN4elFrRkJiVUpFTEZkQlFXNUNPMEZCUTBFN1FVRkRRVW9zYlVKQlFXZENSU3hMUVVGb1FpeEpRVUY1UWl4SlFVRjZRanRCUVVOQk8wRkJRMFE3UVVGRFJEczdRVUZGUkN4VFFVRlRSeXhyUWtGQlZDeERRVUUwUWtRc1YwRkJOVUlzUlVGQmQwTTdRVUZEZGtOQkxHRkJRVmxGTEVkQlFWb3NRMEZCYVVJc1ZVRkJRME1zVTBGQlJDeEZRVUZoVEN4TFFVRmlMRVZCUVhWQ08wRkJRM1pEU3l4WlFVRlZha0lzVVVGQlZpeERRVUZ0UW10Q0xFbEJRVzVDTEVOQlFYZENSQ3hWUVVGVmJFSXNUMEZCVml4SlFVRnhRbXRDTEZWQlFWVnFRaXhSUVVGV0xFTkJRVzFDTEUxQlFXNUNMRU5CUVRkRE8wRkJRMEVzVFVGQlNXbENMRlZCUVZWb1FpeFJRVUZrTEVWQlFYZENPMEZCUTNaQ1owSXNZVUZCVldoQ0xGRkJRVllzUTBGQmJVSnBRaXhKUVVGdVFpeERRVUYzUWtRc1ZVRkJWV2hDTEZGQlFWWXNRMEZCYlVJc1RVRkJia0lzUTBGQmVFSTdRVUZEUVR0QlFVTkVMRVZCVEVRN1FVRk5RVHM3UVVGRlJDeFRRVUZUYTBJc05rSkJRVlFzUjBGQmQwTTdRVUZEZGtOU08wRkJRMEZJTERKQ1FVRXdRbGtzVDBGQlQwTXNjVUpCUVZBc1EwRkJOa0pHTERaQ1FVRTNRaXhEUVVFeFFqdEJRVU5CT3p0SlFVVkxSeXhYTEVkQlEwd3NkVUpCUVdFN1FVRkJRVHM3UVVGRFRtUXNNa0pCUVRCQ0xFTkJRVEZDTEVOQlJFMHNRMEZEZFVJN1FVRkROMElzVFVGQlMyVXNTMEZCVER0QlFVTk9MRU03TzBGQlNVWkVMRmxCUVZsdVFpeFRRVUZhTEVOQlFYTkNSeXhIUVVGMFFpeEhRVUUwUWl4VlFVRlZWeXhUUVVGV0xFVkJRWEZDTzBGQlFVRXNTMEZEZUVObUxGRkJSSGRETEVkQlF6TkNaU3hUUVVReVFpeERRVU40UTJZc1VVRkVkME03TzBGQlJXaEVMRXRCUVVjc1EwRkJRMUVzWjBKQlFXZENVaXhSUVVGb1FpeERRVUZLTEVWQlFUaENPMEZCUXpkQ1VTeHJRa0ZCWjBKU0xGRkJRV2hDTEVsQlFUUkNMRVZCUVRWQ08wRkJRMEU3UVVGRFJDeExRVUZOV1N4alFVRmpTaXhuUWtGQlowSlNMRkZCUVdoQ0xFTkJRWEJDTzBGQlEwRlpMR0ZCUVZsVkxFbEJRVm9zUTBGQmFVSlFMRk5CUVdwQ0xFVkJUbWRFTEVOQlRXNUNPMEZCUXpkQ0xFTkJVRVE3TzBGQlZVRTdRVUZEUVVzc1dVRkJXVzVDTEZOQlFWb3NRMEZCYzBKdlFpeExRVUYwUWl4SFFVRTRRaXhaUVVGWk8wRkJRM3BETEV0QlFVZElMRTFCUVVnc1JVRkJWVHRCUVVOVU8wRkJRMEU3UVVGRFFWb3NORUpCUVRCQ1dTeFBRVUZQUXl4eFFrRkJVQ3hEUVVFMlFrWXNOa0pCUVRkQ0xFTkJRVEZDTzBGQlEwRTdRVUZEUkN4RFFVNUVPenRCUVZOQlJ5eFpRVUZaYmtJc1UwRkJXaXhEUVVGelFuTkNMRWxCUVhSQ0xFZEJRVFpDTEZsQlFWazdRVUZEZUVNc1MwRkJSMHdzVFVGQlNDeEZRVUZWTzBGQlExUkJMRk5CUVU5TkxHOUNRVUZRTEVOQlFUUkNiRUlzZFVKQlFUVkNPMEZCUTBFN1FVRkRSQ3hEUVVwRU96dEJRVTFCWXl4WlFVRlpia0lzVTBGQldpeERRVUZ6UWtrc1kwRkJkRUlzUjBGQmRVTXNXVUZCV1R0QlFVTnNSQ3hSUVVGUFJ5eG5Ra0ZCWjBKSExFMUJRV2hDTEVkQlFYbENMRU5CUVdoRE8wRkJRMEVzUTBGR1JEczdRVUZKUVN4SlFVRk5ZeXh2UWtGQmIwSXNTVUZCU1V3c1YwRkJTaXhGUVVFeFFqczdhMEpCUldWTExHbENJaXdpWm1sc1pTSTZJbXhwWWk5MGFXTnJaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGNJblJwWTJ0bGNsd2lMQ0JiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSjBhV05yWlhKY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aWRHbGphMlZ5WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1ZlNrb2RHaHBjeXdnWm5WdVkzUnBiMjRvS1NCN1hHNXlaWFIxY200Z1hHNWNibHh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVklnTHk5Y2JpOHZJSGRsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2UxeHVJRngwWEhSY2RGeDBZMjl1Wm1sbmRYSmhZbXhsT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJjZEdWdWRXMWxjbUZpYkdVNklIUnlkV1VzWEc0Z1hIUmNkRngwWEhSblpYUTZJR2RsZEhSbGNseHVJRngwWEhSY2RIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc0Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmlCY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjeUE5SURBcE8xeHVYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUhkbFluQmhZMnN2WW05dmRITjBjbUZ3SUdJd01XRmlOak0wTnpVellXRm1aR016WldJMElpd2lhVzF3YjNKMElGUnBZMnRsY2lCbWNtOXRJQ2N1TDFScFkydEZiblJ5ZVNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGUnBZMnRsY2p0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOXBibVJsZUM1cWN5SXNJbWx0Y0c5eWRDQnRZVzVoWjJWeUlHWnliMjBnSnk0dlRXRnVZV2RsY2ljN1hHNWNiaTh2SUhSdlJHODZJSE4xY0hCdmNuUWdZbTkwYUNCallXeHNZbUZqYXlCaGJtUWdjSEp2YldselpWeHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVkdsamEwVnVkSEo1WEc1N1hHNWNkQzhxS2x4dVhIUWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdZMjl1ZEdWNGRDQXRJRlJvWlNCY0luUm9hWE5jSWlCaGNtZDFiV1Z1ZENCbWIzSWdkR2hsSUd4cGMzUmxibVZ5SUdaMWJtTjBhVzl1TGx4dVhIUWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVmU0JzYVhOMFpXNWxjaTVjYmx4MElDb3ZYRzVjZEdOdmJuTjBjblZqZEc5eUtHTnZiblJsZUhRc0lHeHBjM1JsYm1WeUxDQmpZV3hzWW1GamF5QTlJRzUxYkd3c0lIQnlhVzl5YVhSNUlEMGdNQ2xjYmx4MGUxeHVYSFJjZEhSb2FYTXVZMjl1ZEdWNGRDQTlJR052Ym5SbGVIUTdYRzVjZEZ4MGRHaHBjeTVzYVhOMFpXNWxjaUE5SUd4cGMzUmxibVZ5TzF4dVhIUmNkSFJvYVhNdVkyRnNiR0poWTJzZ1BTQmpZV3hzWW1GamF6dGNibHgwWEhSMGFHbHpMbkJ5YVc5eWFYUjVJRDBnY0hKcGIzSnBkSGs3WEc1Y2RIMWNibHh1ZlZ4dVhHNHZLaTB0TFMwZ1VIVmliR2xqZkZCeWIzUnZkSGx3WlNCTlpYUm9iMlJ6SUMwdExTb3ZYRzVjYmxScFkydEZiblJ5ZVM1d2NtOTBiM1I1Y0dVdVpHbHpjRzl6WlNBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEhSb2FYTXVZMjl1ZEdWNGRDQTlJRzUxYkd3N1hHNWNkSFJvYVhNdWJHbHpkR1Z1WlhJZ1BTQnVkV3hzTzF4dVhIUjBhR2x6TG1OaGJHeGlZV05ySUQwZ2JuVnNiRHRjYmx4MGRHaHBjeTV3Y21sdmNtbDBlU0E5SUc1MWJHdzdYRzU5TzF4dVhHNVVhV05yUlc1MGNua3VjSEp2ZEc5MGVYQmxMbVY0WldOMWRHVWdQU0JtZFc1amRHbHZiaWdwZTF4dVhIUnRZVzVoWjJWeUxtRmtaQ2gwYUdsektUdGNibjA3WEc1Y2JsUnBZMnRGYm5SeWVTNXdjbTkwYjNSNWNHVXVaMlYwVFdGNFVISnBiM0pwZEhrZ1BTQm1kVzVqZEdsdmJpZ3BlMXh1WEhSeVpYUjFjbTRnYldGdVlXZGxjaTVuWlhSTllYaFFjbWx2Y21sMGVTZ3BPMXh1ZlR0Y2JseHVYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2VkdsamEwVnVkSEo1TG1weklpd2lYRzVzWlhRZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FnUFNCT1lVNDdYRzVzWlhRZ2NISnBiM0pwZEhsRmJuUnlhV1Z6SUQwZ1cyNTFiR3dzSUc1MWJHd3NJRzUxYkd3c0lHNTFiR3hkTzF4dVhHNW1kVzVqZEdsdmJpQnZibFJwWTJzb0tYdGNibHgwWm05eUtHeGxkQ0JwYm1SbGVDQTlJREFnT3lCcGJtUmxlQ0E4SUhCeWFXOXlhWFI1Ulc1MGNtbGxjeTVzWlc1bmRHZzdJR2x1WkdWNEt5c3BlMXh1WEhSY2RHeGxkQ0IwYVdOclJXNTBjbWxsY3lBOUlIQnlhVzl5YVhSNVJXNTBjbWxsYzF0cGJtUmxlRjA3WEc1Y2RGeDBhV1lvZEdsamEwVnVkSEpwWlhNZ0ppWWdkR2xqYTBWdWRISnBaWE11YkdWdVozUm9JRDRnTUNrZ2UxeHVYSFJjZEZ4MFpYaGxZM1YwWlZScFkydEZiblJ5YVdWektIUnBZMnRGYm5SeWFXVnpLVHRjYmx4MFhIUmNkQzh2UTJ4bFlYSWdkR2hsYlNCdmJtTmxJR1Y0WldOMWRHVmtYRzVjZEZ4MFhIUndjbWx2Y21sMGVVVnVkSEpwWlhOYmFXNWtaWGhkSUQwZ2JuVnNiRHRjYmx4MFhIUjlYRzVjZEgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWlhobFkzVjBaVlJwWTJ0RmJuUnlhV1Z6S0hScFkydEZiblJ5YVdWektYdGNibHgwZEdsamEwVnVkSEpwWlhNdWJXRndLQ0FvZEdsamEwVnVkSEo1SUN3Z2FXNWtaWGdnS1QwK0lIdGNibHgwWEhSMGFXTnJSVzUwY25rdWJHbHpkR1Z1WlhJdVkyRnNiQ2gwYVdOclJXNTBjbmt1WTI5dWRHVjRkQ0I4ZkNCMGFXTnJSVzUwY25rdWJHbHpkR1Z1WlhKYkozUm9hWE1uWFNrN1hHNWNkRngwYVdZZ0tIUnBZMnRGYm5SeWVTNWpZV3hzWW1GamF5a2dlMXh1WEhSY2RGeDBkR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJMbU5oYkd3b2RHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOcld5ZDBhR2x6SjEwcE8xeHVYSFJjZEgxY2JseDBmU2s3WEc1OVhHNWNibVoxYm1OMGFXOXVJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVOaGJHeGlZV05yS0NsN1hHNWNkRzl1VkdsamF5Z3BPMXh1WEhSeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ0E5SUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxRMkZzYkdKaFkyc3BPMXh1ZlZ4dVhHNWpiR0Z6Y3lCVWFXTnJUV0Z1WVdkbGNpQjdYRzVjZEdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lEMGdNRHNnTHk4Z1ptOXlJRmRwYm1SdmQzTWdSVzUyWEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25Rb0tUdGNibHgwZlZ4dWZWeHVYRzVjYmxScFkydE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNWhaR1FnUFNCbWRXNWpkR2x2YmlBb2RHbGphMFZ1ZEhKNUtTQjdYRzVjZEdOdmJuTjBJSHNnY0hKcGIzSnBkSGtnZlNBOUlIUnBZMnRGYm5SeWVUdGNibHgwYVdZb0lYQnlhVzl5YVhSNVJXNTBjbWxsYzF0d2NtbHZjbWwwZVYwcGUxeHVYSFJjZEhCeWFXOXlhWFI1Ulc1MGNtbGxjMXR3Y21sdmNtbDBlVjBnUFNCYlhUdGNibHgwZlZ4dVhIUmpiMjV6ZENCMGFXTnJSVzUwY21sbGN5QTlJSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHdjbWx2Y21sMGVWMDdYRzVjZEhScFkydEZiblJ5YVdWekxuQjFjMmdvZEdsamEwVnVkSEo1S1RzZ0x5OGdkRzlrYnpvZ1UzUmhZMnNnYjNJZ1VYVmxkV1ZjYm4wN1hHNWNibHh1THk4Z1ZHOWtiem9nVTNWd2NHOXlkQ0JtYjNJZ1RtOWtaVXBUSUZ4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbk4wWVhKMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUnBaaWgzYVc1a2IzY3BlMXh1WEhSY2RDOHZJSGRwYkd3Z2NtVmpaV2wyWlhNZ2RHbHRaWE4wWVcxd0lHRnpJR0Z5WjNWdFpXNTBYRzVjZEZ4MEx5OTBiMlJ2T2lCTVpXRnliam9nSUhSb1pTQndkWEp3YjNObElHOW1JSFJwYldWemRHRnRjRnh1WEhSY2RISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSUQwZ2QybHVaRzkzTG5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTaHlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheWs3WEc1Y2RIMWNibjA3WEc1Y2JseHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG5OMGIzQWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNWNkR2xtS0hkcGJtUnZkeWw3WEc1Y2RGeDBkMmx1Wkc5M0xtTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxLSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0tUdGNibHgwZlZ4dWZUdGNibHh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExtZGxkRTFoZUZCeWFXOXlhWFI1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSeVpYUjFjbTRnY0hKcGIzSnBkSGxGYm5SeWFXVnpMbXhsYm1kMGFDQXRJREU3WEc1OU8xeHVYRzVqYjI1emRDQnphVzVuYkdWMGIyNUpibk4wWVc1alpTQTlJRzVsZHlCVWFXTnJUV0Z1WVdkbGNpZ3BPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0J6YVc1bmJHVjBiMjVKYm5OMFlXNWpaVHRjYmx4dVhHNWNibHh1WEc1Y2JseHVYRzVjYmx4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZJZ0x5OWNiaTh2SUM0dmJHbGlMMDFoYm1GblpYSXVhbk1pWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJpbXBvcnQgRW50cnkgZnJvbSAnLi9lbnRyeSc7XG5pbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gMDtcbiAgICB9XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LGZ1bmMsIGV4ZWN1dGVMYXRlckluTmV4dFRpY2sgPSBmYWxzZSwgcHJpb3JpdHkgPSAwLCAgY2FsbGJhY2sgPSBudWxsKXtcbiAgICBsZXQgZW50cnk7XG4gICAgaWYgKGV4ZWN1dGVMYXRlckluTmV4dFRpY2spe1xuXG5cdCAgICAgY29uc3QgdGlja2VyQ2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IC0gMTtcblx0XHQgICAgaWYoY2FsbGJhY2spe1xuXHRcdCAgICBcdGNhbGxiYWNrLmNhbGwoY2FsbGJhY2tbJ3RoaXMnXSlcblx0XHQgICAgfVxuXHQgICAgfTtcbiAgICAgICAgY29uc3QgdGlja2VyID0gbmV3IFRpY2tlcihjb250ZXh0LGZ1bmMsIHRpY2tlckNhbGxiYWNrLCBwcmlvcml0eSk7XG5cdCAgICBlbnRyeSA9IG5ldyBFbnRyeSh0aWNrZXIsIHRpY2tlci5leGVjdXRlKTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMucHVzaChlbnRyeSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyeSA9IG5ldyBFbnRyeShjb250ZXh0LCBmdW5jKTtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LGZ1bmMsIGNhbGxiYWNrID0gbnVsbCl7XG5cdGxldCBlbnRyeSwgaTtcblx0Y29uc3Qge2ZyYW1lRW50cmllcywgZW50cmllc30gPSB0aGlzO1xuXG5cdGZvcihpID0gMDsgaSA8IGZyYW1lRW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdCAgICBjb25zdCBmcmFtZUVudHJ5ID0gIGZyYW1lRW50cmllc1tpXTtcblx0XHRlbnRyeSA9IGZyYW1lRW50cnkuY29udGV4dDtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRmcmFtZUVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRpY2tlckNhbGxiYWNrID0gKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IC0gMTtcblx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpXG5cdFx0XHRcdH07XG5cdFx0XHRcdGNvbnN0IHRpY2tlciA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIHRpY2tlckNhbGxiYWNrLCAzKTtcblx0XHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHRcdFx0dGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgKyAxXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Zm9yKGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0ZW50cnkgPSBlbnRyaWVzW2ldO1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0ZW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS50cmlnZ2VyTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UgPSBbXTtcblxuXHR0aGlzLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuICAgICAgICBpZiAoZW50cnkubGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuICAgICAgICB0aGlzLmVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICB0aGlzLmZyYW1lRW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG4gICAgICAgIGlmIChlbnRyeS5saXN0ZW5lcikge1xuXHQgICAgICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ICsgMTtcbiAgICAgICAgICAgIGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG4gICAgfSwgdGhpcylcblxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZnVuY3Rpb25zLmpzIiwiaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZnVuYyl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jO1xuICAgIH1cbn1cblxuRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKXtcbiAgICBpZih0aGlzLmNvbnRleHQgaW5zdGFuY2VvZiBUaWNrZXIpe1xuICAgICAgICB0aGlzLmNvbnRleHQuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXIgPSBudWxsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9lbnRyeS5qcyIsImltcG9ydCBGdW5jdGlvbnMgZnJvbSBcIi4vLi4vbGliXCI7XG5cblxuXG5mdW5jdGlvbiBpbW1lZGlhdGVGdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBJbW1lZGlhdGUgRnVuY3Rpb25cIik7XG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25zLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50KTtcbn1cblxuZnVuY3Rpb24gZnJhbWVGdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBGcmFtZSBGdW5jdGlvblwiKTtcblx0Y29uc29sZS5sb2coZnVuY3Rpb25zLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50KTtcbn1cblxuZnVuY3Rpb24gZnJhbWVGdW5jdGlvblNlY29uZCgpe1xuICAgIGNvbnNvbGUubG9nKFwiSSBhbSBGcmFtZSBGdW5jdGlvbiBTZWNvbmRcIik7XG5cdGNvbnNvbGUubG9nKGZ1bmN0aW9ucy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCk7XG59XG5jb25zdCBmdW5jdGlvbnMgPSBuZXcgRnVuY3Rpb25zKCk7XG5jb25zb2xlLmxvZyhmdW5jdGlvbnMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQpO1xuZnVuY3Rpb25zLmFkZExpc3RlbmVyKHdpbmRvdyxmcmFtZUZ1bmN0aW9uU2Vjb25kLCB0cnVlLCAxKTtcbmZ1bmN0aW9ucy5hZGRMaXN0ZW5lcih3aW5kb3csZnJhbWVGdW5jdGlvbiwgdHJ1ZSApO1xuZnVuY3Rpb25zLmFkZExpc3RlbmVyKHdpbmRvdyxpbW1lZGlhdGVGdW5jdGlvbik7XG5cbmNvbnNvbGUubG9nKFwidHJpZ2dlciAxXCIpO1xuXG5mdW5jdGlvbnMudHJpZ2dlckxpc3RlbmVycygpO1xuLy8gMiBlbnRyaWVzXG5cbmZ1bmN0aW9ucy5yZW1vdmVMaXN0ZW5lcih3aW5kb3csZnJhbWVGdW5jdGlvblNlY29uZCwgZnVuY3Rpb25zLnRyaWdnZXJMaXN0ZW5lcnMuYmluZChmdW5jdGlvbnMpKTtcbi8vIDNyZCBlbnRyeVxuZnVuY3Rpb25zLnJlbW92ZUxpc3RlbmVyKHdpbmRvdyxpbW1lZGlhdGVGdW5jdGlvbik7XG5cbmNvbnNvbGUubG9nKFwidHJpZ2dlciAyXCIpO1xuZnVuY3Rpb25zLnRyaWdnZXJMaXN0ZW5lcnMoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9