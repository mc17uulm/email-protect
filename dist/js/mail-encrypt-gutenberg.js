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

/***/ "./src/ts/gutenberg/block/ExtendedEditor.tsx":
/*!***************************************************!*\
  !*** ./src/ts/gutenberg/block/ExtendedEditor.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar element_1 = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\r\nvar element_2 = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\r\nvar rich_text_1 = __webpack_require__(/*! @wordpress/rich-text */ \"@wordpress/rich-text\");\r\nvar ToolbarButton_1 = __importDefault(__webpack_require__(/*! ./ToolbarButton */ \"./src/ts/gutenberg/block/ToolbarButton.tsx\"));\r\nvar MailPopover_1 = __importDefault(__webpack_require__(/*! ./MailPopover */ \"./src/ts/gutenberg/block/MailPopover.tsx\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ExtendedEditor = /** @class */ (function (_super) {\r\n    __extends(ExtendedEditor, _super);\r\n    function ExtendedEditor(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.state = {\r\n            visible: false,\r\n            data: {\r\n                mail: '',\r\n                text: ''\r\n            },\r\n            selected: ''\r\n        };\r\n        _this.onToggle = _this.onToggle.bind(_this);\r\n        _this.add = _this.add.bind(_this);\r\n        _this.toggle = _this.toggle.bind(_this);\r\n        _this.update = _this.update.bind(_this);\r\n        return _this;\r\n    }\r\n    ExtendedEditor.prototype.onToggle = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var selected;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (!this.props.isActive) return [3 /*break*/, 3];\r\n                        return [4 /*yield*/, this.setState({\r\n                                visible: false,\r\n                                selected: ''\r\n                            })];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [4 /*yield*/, this.toggle()];\r\n                    case 2:\r\n                        _a.sent();\r\n                        return [3 /*break*/, 5];\r\n                    case 3:\r\n                        selected = this.props.value.text.substr(this.props.value.start, this.props.value.end);\r\n                        return [4 /*yield*/, this.setState({ selected: selected })];\r\n                    case 4:\r\n                        _a.sent();\r\n                        this.setState({ visible: true });\r\n                        _a.label = 5;\r\n                    case 5: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ExtendedEditor.prototype.add = function (state) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.setState({\r\n                            data: {\r\n                                mail: state.mail,\r\n                                text: state.text\r\n                            },\r\n                            visible: false\r\n                        })];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [4 /*yield*/, this.toggle()];\r\n                    case 2:\r\n                        _a.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ExtendedEditor.prototype.toggle = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.props.onChange(rich_text_1.toggleFormat(this.props.value, {\r\n                            type: 'mail-encrypt/encrypt',\r\n                            attributes: {\r\n                                classname: 'mail-encrypt-str'\r\n                            }\r\n                        }))];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ExtendedEditor.prototype.update = function (id, value) {\r\n        var d = this.state.data;\r\n        d[id] = value;\r\n        this.setState({\r\n            data: d\r\n        });\r\n    };\r\n    ExtendedEditor.prototype.render = function () {\r\n        return (react_1.default.createElement(element_2.Fragment, null,\r\n            react_1.default.createElement(ToolbarButton_1.default, { active: this.props.isActive, action: this.onToggle }),\r\n            react_1.default.createElement(MailPopover_1.default, { visible: this.state.visible, selected: this.state.selected, update: this.update })));\r\n    };\r\n    return ExtendedEditor;\r\n}(element_1.Component));\r\nexports.default = ExtendedEditor;\r\n\n\n//# sourceURL=webpack:///./src/ts/gutenberg/block/ExtendedEditor.tsx?");

/***/ }),

/***/ "./src/ts/gutenberg/block/MailPopover.tsx":
/*!************************************************!*\
  !*** ./src/ts/gutenberg/block/MailPopover.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar element_1 = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\r\nvar components_1 = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar MailPopover = /** @class */ (function (_super) {\r\n    __extends(MailPopover, _super);\r\n    function MailPopover(props) {\r\n        return _super.call(this, props) || this;\r\n    }\r\n    MailPopover.prototype.render = function () {\r\n        var _this = this;\r\n        return this.props.visible ? (react_1.default.createElement(components_1.Popover, null,\r\n            \"Insert protected mail address\",\r\n            react_1.default.createElement(\"form\", null,\r\n                react_1.default.createElement(components_1.TextControl, { label: \"Mail address\", id: \"mail\", value: this.props.selected, onChange: function (val) { return _this.props.update(\"mail\", val); } }),\r\n                react_1.default.createElement(components_1.TextControl, { label: \"Link text\", id: \"text\", value: this.props.selected, onChange: function (val) { return _this.props.update(\"text\", val); } })))) : \"\";\r\n    };\r\n    return MailPopover;\r\n}(element_1.Component));\r\nexports.default = MailPopover;\r\n\n\n//# sourceURL=webpack:///./src/ts/gutenberg/block/MailPopover.tsx?");

/***/ }),

/***/ "./src/ts/gutenberg/block/ToolbarButton.tsx":
/*!**************************************************!*\
  !*** ./src/ts/gutenberg/block/ToolbarButton.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar element_1 = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\r\nvar block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ToolbarButton = /** @class */ (function (_super) {\r\n    __extends(ToolbarButton, _super);\r\n    function ToolbarButton(props) {\r\n        return _super.call(this, props) || this;\r\n    }\r\n    ToolbarButton.prototype.render = function () {\r\n        return (react_1.default.createElement(block_editor_1.RichTextToolbarButton, { icon: \"editor-underline\", title: \"Mail Encrypt\", isActive: this.props.active, onClick: this.props.action }));\r\n    };\r\n    return ToolbarButton;\r\n}(element_1.Component));\r\nexports.default = ToolbarButton;\r\n\n\n//# sourceURL=webpack:///./src/ts/gutenberg/block/ToolbarButton.tsx?");

/***/ }),

/***/ "./src/ts/gutenberg/index.js":
/*!***********************************!*\
  !*** ./src/ts/gutenberg/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/rich-text */ \"@wordpress/rich-text\");\n/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _block_ExtendedEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/ExtendedEditor */ \"./src/ts/gutenberg/block/ExtendedEditor.tsx\");\n/* harmony import */ var _block_ExtendedEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_block_ExtendedEditor__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar unsubscribe = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"subscribe\"])(function () {\n  var format = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__[\"select\"])('core/rich-text').getFormatType('core/link');\n  if (!format) return;\n  unsubscribe();\n  var settings = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__[\"unregisterFormatType\"])('core/link');\n  Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__[\"registerFormatType\"])('mail-encrypt/encrypt', _objectSpread(_objectSpread({}, settings), {}, {\n    name: 'mail-encrypt/encrypt',\n    title: 'Mail Encrypt',\n    tagName: 'a',\n    attributes: {\n      link: {\n        type: 'string'\n      },\n      text: {\n        type: 'string'\n      }\n    },\n    edit: function edit(_ref) {\n      var isActive = _ref.isActive,\n          value = _ref.value,\n          onChange = _ref.onChange;\n      return /*#__PURE__*/React.createElement(_block_ExtendedEditor__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        isActive: isActive,\n        value: value,\n        onChange: onChange\n      });\n    }\n  }));\n});\n/**\r\n * <MailPopover visible={isVisible} />\r\n */\n\n//# sourceURL=webpack:///./src/ts/gutenberg/index.js?");

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

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"data\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22data%22%5D%7D?");

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