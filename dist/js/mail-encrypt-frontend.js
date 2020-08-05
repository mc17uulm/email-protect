/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/frontend/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/MailEncrypt.ts":
/*!*******************************!*\
  !*** ./src/ts/MailEncrypt.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MailEncrypt = /** @class */ (function () {\r\n    function MailEncrypt() {\r\n    }\r\n    MailEncrypt.encrypt = function (str) {\r\n        return str\r\n            .split(\"\")\r\n            .map(function (char) {\r\n            return char.charCodeAt(0);\r\n        })\r\n            .reduce(function (carry, item) {\r\n            return carry + \"&#\" + item + \";\";\r\n        }, \"\");\r\n    };\r\n    MailEncrypt.decrypt = function (str) {\r\n        return str\r\n            .split(\"\")\r\n            .map(function (char) {\r\n            return String.fromCharCode(char.charCodeAt(0) - 2);\r\n        })\r\n            .join(\"\");\r\n    };\r\n    return MailEncrypt;\r\n}());\r\nexports.default = MailEncrypt;\r\n\n\n//# sourceURL=webpack:///./src/ts/MailEncrypt.ts?");

/***/ }),

/***/ "./src/ts/frontend/index.ts":
/*!**********************************!*\
  !*** ./src/ts/frontend/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n *\r\n */\r\nvar MailEncrypt_1 = __importDefault(__webpack_require__(/*! ../MailEncrypt */ \"./src/ts/MailEncrypt.ts\"));\r\nvar MailEncryptFrontend = /** @class */ (function () {\r\n    function MailEncryptFrontend() {\r\n    }\r\n    MailEncryptFrontend.register = function () {\r\n        var links = document.querySelectorAll('a[name=mail-encrypt-tag]');\r\n        var hidden = document.querySelectorAll('a[class=mail-encrypt-body]');\r\n        links.forEach(function (elem) {\r\n            elem.addEventListener('click', MailEncryptFrontend.onclick);\r\n            elem.innerText = MailEncrypt_1.default.decrypt(elem.innerText);\r\n        });\r\n        hidden.forEach(function (elem) {\r\n            elem.innerText = elem.attributes.getNamedItem('content').value;\r\n        });\r\n    };\r\n    MailEncryptFrontend.onclick = function (e) {\r\n        if (e.target instanceof HTMLElement) {\r\n            e.preventDefault();\r\n            window.location.href = \"mailto:\" + MailEncrypt_1.default.decrypt(e.target.getAttribute('value'));\r\n        }\r\n    };\r\n    return MailEncryptFrontend;\r\n}());\r\n(function () {\r\n    MailEncryptFrontend.register();\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/ts/frontend/index.ts?");

/***/ })

/******/ });