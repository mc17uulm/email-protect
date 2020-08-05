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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/gutenberg/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/email-validator/index.js":
/*!***********************************************!*\
  !*** ./node_modules/email-validator/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar tester = /^[-!#$%&'*+\\/0-9=?A-Z^_a-z{|}~](\\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\\.?[a-zA-Z0-9])*\\.[a-zA-Z](-?[a-zA-Z0-9])+$/;\r\n// Thanks to:\r\n// http://fightingforalostcause.net/misc/2006/compare-email-regex.php\r\n// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx\r\n// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378\r\nexports.validate = function(email)\r\n{\r\n\tif (!email)\r\n\t\treturn false;\r\n\t\t\r\n\tif(email.length>254)\r\n\t\treturn false;\r\n\r\n\tvar valid = tester.test(email);\r\n\tif(!valid)\r\n\t\treturn false;\r\n\r\n\t// Further checking of some things regex can't handle\r\n\tvar parts = email.split(\"@\");\r\n\tif(parts[0].length>64)\r\n\t\treturn false;\r\n\r\n\tvar domainParts = parts[1].split(\".\");\r\n\tif(domainParts.some(function(part) { return part.length>63; }))\r\n\t\treturn false;\r\n\r\n\treturn true;\r\n}\n\n//# sourceURL=webpack:///./node_modules/email-validator/index.js?");

/***/ }),

/***/ "./src/ts/MailEncrypt.ts":
/*!*******************************!*\
  !*** ./src/ts/MailEncrypt.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MailEncrypt = /** @class */ (function () {\r\n    function MailEncrypt() {\r\n    }\r\n    MailEncrypt.encrypt = function (str) {\r\n        return str\r\n            .split(\"\")\r\n            .map(function (char) {\r\n            return char.charCodeAt(0);\r\n        })\r\n            .reduce(function (carry, item) {\r\n            return carry + \"&#\" + item + \";\";\r\n        }, \"\");\r\n    };\r\n    MailEncrypt.decrypt = function (str) {\r\n        return str\r\n            .split(\"\")\r\n            .map(function (char) {\r\n            return String.fromCharCode(char.charCodeAt(0) - 2);\r\n        })\r\n            .join(\"\");\r\n    };\r\n    return MailEncrypt;\r\n}());\r\nexports.default = MailEncrypt;\r\n\n\n//# sourceURL=webpack:///./src/ts/MailEncrypt.ts?");

/***/ }),

/***/ "./src/ts/gutenberg/EditorHandler.ts":
/*!*******************************************!*\
  !*** ./src/ts/gutenberg/EditorHandler.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar EmailValidator = __importStar(__webpack_require__(/*! email-validator */ \"./node_modules/email-validator/index.js\"));\r\nvar MailEncrypt_1 = __importDefault(__webpack_require__(/*! ../MailEncrypt */ \"./src/ts/MailEncrypt.ts\"));\r\nvar EditorHandler = /** @class */ (function () {\r\n    function EditorHandler() {\r\n    }\r\n    EditorHandler.load_content = function (contents) {\r\n        var _this = this;\r\n        return contents.map(function (el) {\r\n            if (el.type === 'a' && el.props.class === _this.classname) {\r\n                return el.props.children[0];\r\n            }\r\n            else {\r\n                return el;\r\n            }\r\n        });\r\n    };\r\n    EditorHandler.save = function (contents) {\r\n        var renderedContent = [];\r\n        contents.forEach(function (el) {\r\n            if (typeof el === \"string\") {\r\n                var parts_1 = el.split(\" \");\r\n                var str_1 = \"\";\r\n                parts_1.forEach(function (part, i) {\r\n                    if (EmailValidator.validate(part)) {\r\n                        renderedContent.push(str_1);\r\n                        str_1 = \" \";\r\n                        var encrypted = MailEncrypt_1.default.encrypt(part);\r\n                        renderedContent.push({\r\n                            type: 'a',\r\n                            props: {\r\n                                children: [encrypted],\r\n                                href: \"mailto:\" + encrypted,\r\n                                class: 'mail-encrypt-body'\r\n                            }\r\n                        });\r\n                    }\r\n                    else {\r\n                        if (i < parts_1.length - 1) {\r\n                            str_1 += part + \" \";\r\n                        }\r\n                        else {\r\n                            str_1 += part;\r\n                        }\r\n                    }\r\n                });\r\n                renderedContent.push(str_1);\r\n            }\r\n            else {\r\n                renderedContent.push(el);\r\n            }\r\n        });\r\n        return renderedContent;\r\n    };\r\n    EditorHandler.classname = 'mail-encrypt-body';\r\n    return EditorHandler;\r\n}());\r\nexports.default = EditorHandler;\r\n\n\n//# sourceURL=webpack:///./src/ts/gutenberg/EditorHandler.ts?");

/***/ }),

/***/ "./src/ts/gutenberg/index.js":
/*!***********************************!*\
  !*** ./src/ts/gutenberg/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EditorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorHandler */ \"./src/ts/gutenberg/EditorHandler.ts\");\n/* harmony import */ var _EditorHandler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_EditorHandler__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"registerBlockType\"])('mail-encrypt/block', {\n  title: 'Secure Mail in Text',\n  icon: 'post-status',\n  category: 'layout',\n  attributes: {\n    content: {\n      type: 'array',\n      source: 'children'\n    }\n  },\n  edit: function edit(props) {\n    var content = _EditorHandler__WEBPACK_IMPORTED_MODULE_2___default.a.load_content(props.attributes.content);\n\n    var onChangeContent = function onChangeContent(newContent) {\n      props.setAttributes({\n        content: newContent\n      });\n    };\n\n    return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"], {\n      key: \"editable\",\n      tagName: \"p\",\n      className: props.className,\n      onChange: onChangeContent,\n      value: content,\n      keepPlaceholderOnFocus: true\n    });\n  },\n  save: function save(props) {\n    return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].Content, {\n      value: _EditorHandler__WEBPACK_IMPORTED_MODULE_2___default.a.save(props.attributes.content),\n      className: props.className\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/ts/gutenberg/index.js?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"blockEditor\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22blockEditor%22%5D%7D?");

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"blocks\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22blocks%22%5D%7D?");

/***/ })

/******/ });