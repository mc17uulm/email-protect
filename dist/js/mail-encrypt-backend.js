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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/backend/index.ts");
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

/***/ "./src/ts/backend/index.ts":
/*!*********************************!*\
  !*** ./src/ts/backend/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MailEncrypt_1 = __importDefault(__webpack_require__(/*! ../MailEncrypt */ \"./src/ts/MailEncrypt.ts\"));\r\nvar MailEncryptBackend = /** @class */ (function () {\r\n    function MailEncryptBackend() {\r\n    }\r\n    MailEncryptBackend.register_form = function () {\r\n        var submit_btn = document.getElementById('mail_enc_submit_btn');\r\n        submit_btn.addEventListener('click', MailEncryptBackend.submit);\r\n        document.querySelector('#mail_enc_form input[required=true]').addEventListener('keyup', MailEncryptBackend.keyup);\r\n    };\r\n    MailEncryptBackend.keyup = function (e) {\r\n        if (e.target instanceof HTMLInputElement) {\r\n            e.target.style.borderColor = '';\r\n        }\r\n    };\r\n    MailEncryptBackend.submit = function (e) {\r\n        e.preventDefault();\r\n        var valid = Array.from(document\r\n            .querySelectorAll('#mail_enc_form input[required]'))\r\n            .map(function (elem) {\r\n            elem.style.borderColor = 'red';\r\n            var mail_regex = /^([\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4})?$/;\r\n            if (elem.value === \"\")\r\n                return false;\r\n            if (elem.getAttribute('type') === \"email\" &&\r\n                !mail_regex.test(elem.value)) {\r\n                return false;\r\n            }\r\n            elem.style.borderColor = '';\r\n            return true;\r\n        })\r\n            .reduce(function (p, n) { return p && n; });\r\n        if (valid) {\r\n            var email = document.querySelector('input[name=mail_enc_email]').nodeValue;\r\n            var type = document.querySelector('input[name=tag]:checked').nodeValue;\r\n            var enc_email = MailEncrypt_1.default.encrypt(email);\r\n            var output = void 0;\r\n            if (type === \"0\") {\r\n                output = enc_email;\r\n            }\r\n            else {\r\n                output = \"<a href=\\\"\" + MailEncrypt_1.default.encrypt(\"mailto:\" + email) + \"\\\">\" + enc_email + \"</a>\";\r\n            }\r\n            document.querySelector('#mail_enc_output').nodeValue = output;\r\n            document.querySelector('#mail_enc_post').innerHTML = output;\r\n            document.querySelector('#mail_enc_source').innerHTML = \"<span style=\\\"white-space: pre;\\\">\" + output + \"</span>\";\r\n        }\r\n    };\r\n    return MailEncryptBackend;\r\n}());\r\n(function () {\r\n    MailEncryptBackend.register_form();\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/ts/backend/index.ts?");

/***/ })

/******/ });