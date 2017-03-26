/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = areaOfCircle;
/* harmony export (immutable) */ __webpack_exports__["b"] = areaOfRectangle;


function areaOfCircle(r) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* mul */])(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* PI */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* square */])(r));
}

function areaOfRectangle(w, h) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* mul */])(w, h);
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export add */
/* unused harmony export sub */
/* harmony export (immutable) */ __webpack_exports__["a"] = mul;
/* unused harmony export div */
/* harmony export (immutable) */ __webpack_exports__["c"] = square;
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const PI = 3.141592;
/* harmony export (immutable) */ __webpack_exports__["b"] = PI;


function square(a) {
  return a * a;
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__area_util__ = __webpack_require__(0);


document.addEventListener('DOMContentLoaded', function () {
    registerBtnCbAtfterDomReady();
}, false);

const circleAreaCb = function () {
    const radius = document.getElementById("circle-radius").value;
    document.getElementById("circle-area").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__area_util__["a" /* areaOfCircle */])(radius);
};

const rectangleAreaCb = function () {
    const w = document.getElementById("rectangle-width").value;
    const h = document.getElementById("rectangle-height").value;
    document.getElementById("rectangle-area").value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__area_util__["b" /* areaOfRectangle */])(w, h);
};

const registerBtnCbAtfterDomReady = function () {
    document.getElementById('circle-button')
        .addEventListener('click', circleAreaCb);

    document.getElementById('rectangle-button')
        .addEventListener('click', rectangleAreaCb);
};


/***/ })
/******/ ]);