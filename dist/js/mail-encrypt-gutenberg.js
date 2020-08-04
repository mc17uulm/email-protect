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

/***/ "./src/ts/gutenberg/block/ExtendedEditor.tsx":
/*!***************************************************!*\
  !*** ./src/ts/gutenberg/block/ExtendedEditor.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar element_1 = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\r\nvar element_2 = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\r\nvar rich_text_1 = __webpack_require__(/*! @wordpress/rich-text */ \"@wordpress/rich-text\");\r\nvar ToolbarButton_1 = __importDefault(__webpack_require__(/*! ./ToolbarButton */ \"./src/ts/gutenberg/block/ToolbarButton.tsx\"));\r\nvar MailPopover_1 = __importDefault(__webpack_require__(/*! ./MailPopover */ \"./src/ts/gutenberg/block/MailPopover.tsx\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar EmailValidator = __importStar(__webpack_require__(/*! email-validator */ \"./node_modules/email-validator/index.js\"));\r\nvar MailEncrypt_1 = __importDefault(__webpack_require__(/*! ../../MailEncrypt */ \"./src/ts/MailEncrypt.ts\"));\r\nvar ExtendedEditor = /** @class */ (function (_super) {\r\n    __extends(ExtendedEditor, _super);\r\n    function ExtendedEditor(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.state = {\r\n            visible: false,\r\n            mail: '',\r\n            text: ''\r\n        };\r\n        _this.onToggle = _this.onToggle.bind(_this);\r\n        _this.toggle = _this.toggle.bind(_this);\r\n        _this.update = _this.update.bind(_this);\r\n        _this.show = _this.show.bind(_this);\r\n        _this.hide = _this.hide.bind(_this);\r\n        _this.save = _this.save.bind(_this);\r\n        return _this;\r\n    }\r\n    ExtendedEditor.prototype.onToggle = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var selected;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (!this.props.isActive) return [3 /*break*/, 3];\r\n                        return [4 /*yield*/, this.setState({\r\n                                visible: false,\r\n                                mail: '',\r\n                                text: ''\r\n                            })];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [4 /*yield*/, this.toggle()];\r\n                    case 2:\r\n                        _a.sent();\r\n                        return [3 /*break*/, 8];\r\n                    case 3:\r\n                        selected = this.props.value.text.substring(this.props.value.start, this.props.value.end);\r\n                        if (!EmailValidator.validate(selected)) return [3 /*break*/, 5];\r\n                        return [4 /*yield*/, this.setState({\r\n                                mail: selected\r\n                            })];\r\n                    case 4:\r\n                        _a.sent();\r\n                        return [3 /*break*/, 7];\r\n                    case 5: return [4 /*yield*/, this.setState({\r\n                            text: selected\r\n                        })];\r\n                    case 6:\r\n                        _a.sent();\r\n                        _a.label = 7;\r\n                    case 7:\r\n                        this.setState({ visible: true });\r\n                        _a.label = 8;\r\n                    case 8: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ExtendedEditor.prototype.toggle = function (mail, text) {\r\n        if (mail === void 0) { mail = ''; }\r\n        if (text === void 0) { text = ''; }\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.props.onChange(rich_text_1.toggleFormat(this.props.value, {\r\n                            type: 'mail-encrypt/encrypt',\r\n                            attributes: {\r\n                                href: \"mailto:\" + mail\r\n                            }\r\n                        }))];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ExtendedEditor.prototype.save = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var mail, text;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        mail = MailEncrypt_1.default.encrypt(this.state.mail);\r\n                        text = this.state.text;\r\n                        if (text === '') {\r\n                            text = mail;\r\n                        }\r\n                        return [4 /*yield*/, this.hide()];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [4 /*yield*/, this.toggle(mail, text)];\r\n                    case 2:\r\n                        _a.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ExtendedEditor.prototype.hide = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.setState({\r\n                            visible: false,\r\n                            mail: '',\r\n                            text: ''\r\n                        })];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ExtendedEditor.prototype.show = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.setState({ visible: true })];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ExtendedEditor.prototype.update = function (id, value) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _a;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0: return [4 /*yield*/, this.setState((_a = {},\r\n                            _a[id] = value,\r\n                            _a))];\r\n                    case 1:\r\n                        _b.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ExtendedEditor.prototype.render = function () {\r\n        return (react_1.default.createElement(element_2.Fragment, null,\r\n            react_1.default.createElement(ToolbarButton_1.default, { active: this.props.isActive, action: this.onToggle }),\r\n            react_1.default.createElement(MailPopover_1.default, { visible: this.state.visible, mail: this.state.mail, text: this.state.text, update: this.update, show: this.show, hide: this.hide, save: this.save })));\r\n    };\r\n    return ExtendedEditor;\r\n}(element_1.Component));\r\nexports.default = ExtendedEditor;\r\n\n\n//# sourceURL=webpack:///./src/ts/gutenberg/block/ExtendedEditor.tsx?");

/***/ }),

/***/ "./src/ts/gutenberg/block/MailPopover.tsx":
/*!************************************************!*\
  !*** ./src/ts/gutenberg/block/MailPopover.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar element_1 = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\r\nvar block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\r\nvar components_1 = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar EmailValidator = __importStar(__webpack_require__(/*! email-validator */ \"./node_modules/email-validator/index.js\"));\r\nvar MailPopover = /** @class */ (function (_super) {\r\n    __extends(MailPopover, _super);\r\n    function MailPopover(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.update_link = _this.update_link.bind(_this);\r\n        _this.update_text = _this.update_text.bind(_this);\r\n        _this.click = _this.click.bind(_this);\r\n        return _this;\r\n    }\r\n    MailPopover.prototype.update_link = function (email) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.props.update('mail', email)];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    MailPopover.prototype.update_text = function (text) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.props.update('text', text)];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    MailPopover.prototype.click = function (e) {\r\n        e.preventDefault();\r\n        this.props.save();\r\n    };\r\n    MailPopover.prototype.render = function () {\r\n        if (this.props.visible) {\r\n            var valid = !EmailValidator.validate(this.props.mail);\r\n            return (react_1.default.createElement(block_editor_1.URLPopover, { onClose: this.props.hide },\r\n                react_1.default.createElement(\"div\", { className: \"block-editor-link-control\" },\r\n                    react_1.default.createElement(\"form\", null,\r\n                        react_1.default.createElement(\"h3\", { style: { marginLeft: \"15px\" } }, \"Mail Encrypt\"),\r\n                        react_1.default.createElement(\"span\", { style: { marginLeft: \"15px\" } }, \"E-Mail-Adresse\"),\r\n                        react_1.default.createElement(components_1.TextControl, { className: \"block-editor-link-control__search-input\", placeholder: \"E-Mail-Adresse einf\\u00FCgen\", type: \"text\", onChange: this.update_link, value: this.props.mail }),\r\n                        react_1.default.createElement(\"span\", { style: { marginLeft: \"15px\" } }, \"Text (optional)\"),\r\n                        react_1.default.createElement(components_1.TextControl, { className: \"block-editor-link-control__search-input\", placeholder: \"(optional) Text einf\\u00FCgen\", value: this.props.text, type: \"text\", onChange: this.update_text }),\r\n                        react_1.default.createElement(components_1.Button, { isSecondary: true, label: \"Schlie\\u00DFen\", onClick: this.props.hide, style: {\r\n                                marginLeft: \"15px\",\r\n                                marginBottom: \"15px\"\r\n                            } }, \"Schlie\\u00DFen\"),\r\n                        react_1.default.createElement(components_1.Button, { isPrimary: true, label: \"Sichern\", onClick: this.click, disabled: valid, style: {\r\n                                float: \"right\",\r\n                                marginRight: \"15px\",\r\n                                marginBottom: \"15px\"\r\n                            } }, \"Sichern\")))));\r\n        }\r\n        return \"\";\r\n    };\r\n    return MailPopover;\r\n}(element_1.Component));\r\nexports.default = MailPopover;\r\n/**\r\n <Popover>\r\n Insert protected mail address\r\n <form>\r\n <TextControl\r\n label=\"Mail address\"\r\n id=\"mail\"\r\n value={this.props.selected}\r\n onChange={(val) => this.props.update(\"mail\", val)}\r\n />\r\n <TextControl\r\n label=\"Link text\"\r\n id=\"text\"\r\n value={this.props.selected}\r\n onChange={(val) => this.props.update(\"text\", val)}\r\n />\r\n </form>\r\n <form onSubmit={this.submit}>\r\n <input\r\n id=\"mail\"\r\n type=\"email\"\r\n value={this.props.mail}\r\n onChange={this.update}\r\n />\r\n <input\r\n id=\"text\"\r\n type=\"text\"\r\n value={this.props.text}\r\n onChange={this.update}\r\n />\r\n <Button\r\n label=\"Speichern\"\r\n type=\"submit\"\r\n />\r\n </form>\r\n </Popover>*/ \r\n\n\n//# sourceURL=webpack:///./src/ts/gutenberg/block/MailPopover.tsx?");

/***/ }),

/***/ "./src/ts/gutenberg/block/ToolbarButton.tsx":
/*!**************************************************!*\
  !*** ./src/ts/gutenberg/block/ToolbarButton.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar element_1 = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\r\nvar block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ToolbarButton = /** @class */ (function (_super) {\r\n    __extends(ToolbarButton, _super);\r\n    function ToolbarButton(props) {\r\n        return _super.call(this, props) || this;\r\n    }\r\n    ToolbarButton.prototype.render = function () {\r\n        return (react_1.default.createElement(block_editor_1.RichTextToolbarButton, { icon: \"post-status\", title: \"Mail Encrypt\", isActive: this.props.active, onClick: this.props.action }));\r\n    };\r\n    return ToolbarButton;\r\n}(element_1.Component));\r\nexports.default = ToolbarButton;\r\n\n\n//# sourceURL=webpack:///./src/ts/gutenberg/block/ToolbarButton.tsx?");

/***/ }),

/***/ "./src/ts/gutenberg/index.js":
/*!***********************************!*\
  !*** ./src/ts/gutenberg/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ \"@wordpress/rich-text\");\n/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _block_ExtendedEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/ExtendedEditor */ \"./src/ts/gutenberg/block/ExtendedEditor.tsx\");\n/* harmony import */ var _block_ExtendedEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_block_ExtendedEditor__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__[\"registerFormatType\"])('mail-encrypt/encrypt', {\n  name: 'mail-encrypt/encrypt',\n  title: 'Mail Encrypt',\n  tagName: 'a',\n  attributes: {\n    link: {\n      type: 'string'\n    },\n    text: {\n      type: 'string'\n    }\n  },\n  className: 'mail-encrypt-body',\n  edit: function edit(_ref) {\n    var isActive = _ref.isActive,\n        value = _ref.value,\n        onChange = _ref.onChange;\n    return /*#__PURE__*/React.createElement(_block_ExtendedEditor__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      isActive: isActive,\n      value: value,\n      onChange: onChange\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/ts/gutenberg/index.js?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"blockEditor\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22blockEditor%22%5D%7D?");

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"components\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22components%22%5D%7D?");

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22element%22%5D%7D?");

/***/ }),

/***/ "@wordpress/rich-text":
/*!*******************************************!*\
  !*** external {"this":["wp","richText"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"richText\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22richText%22%5D%7D?");

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"React\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%22React%22%7D?");

/***/ })

/******/ });