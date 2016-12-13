/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./app.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var removeIframeFromElement = __webpack_require__(2);
	var addIframeToElement = __webpack_require__(3);

	var body = document.getElementsByTagName("body")[0];
	removeIframeFromElement(body);
	addIframeToElement(body);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	var removeIframeFromElement = function(element) {
	  var iframe = element.querySelector("iframe");
	  if (iframe) {
	    element.removeChild(iframe);
	  }
	};

	module.exports = removeIframeFromElement;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var addIframeToElement = function(element) {
	  var iframe = document.createElement("iframe");
	  iframe.setAttribute('src', 'http://www.youtube.com/embed/-zFJI4axcxs?autoplay=1')
	  element.appendChild(iframe);
	};

	module.exports = addIframeToElement;


/***/ }
/******/ ]);