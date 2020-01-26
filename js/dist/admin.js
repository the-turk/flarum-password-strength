module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modals_PasswordStrengthSettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/PasswordStrengthSettingsModal */ "./src/admin/modals/PasswordStrengthSettingsModal.js");

 // initialize settings modal

flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('the-turk-password-strength', function (app) {
  app.extensionSettings['the-turk-password-strength'] = function () {
    return app.modal.show(new _modals_PasswordStrengthSettingsModal__WEBPACK_IMPORTED_MODULE_1__["default"]());
  };
});

/***/ }),

/***/ "./src/admin/modals/PasswordStrengthSettingsModal.js":
/*!***********************************************************!*\
  !*** ./src/admin/modals/PasswordStrengthSettingsModal.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordStrengthSettingsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/SettingsModal */ "flarum/components/SettingsModal");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_4__);




 // just to make things easier

var settingsPrefix = 'the-turk-password-strength.';
var translationPrefix = 'the-turk-password-strength.admin.settings.';

var PasswordStrengthSettingsModal =
/*#__PURE__*/
function (_SettingsModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PasswordStrengthSettingsModal, _SettingsModal);

  function PasswordStrengthSettingsModal() {
    return _SettingsModal.apply(this, arguments) || this;
  }

  var _proto = PasswordStrengthSettingsModal.prototype;

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title');
  }
  /**
   * Build modal form.
   *
   * @returns {*}
   */
  ;

  _proto.form = function form() {
    var _this = this;

    return [m('.Form-group', [m('label', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      state: this.setting(settingsPrefix + 'enableLabel', '1')() === '1',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'enableLabel'),
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'enableLabel')(value ? '1' : '0');
      }
    }))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'displayMode')), m('div', flarum_components_Select__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      options: {
        inputColor: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'enableInputColor'),
        inputBgColor: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'enableInputBackground'),
        noInputColor: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'noInputColor')
      },
      onchange: this.setting(settingsPrefix + 'displayMode'),
      value: this.setting(settingsPrefix + 'displayMode')() || this.setting(settingsPrefix + 'displayMode')('inputColor')
    }))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'colorOptions')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'colorHelp'))]), m('.Form-group', [m('div', {
      className: 'passwordStrengthInlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'weakColor'))), m('div', {
      className: 'passwordStrengthInlineDivInput'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'weakColor', '252, 91, 63')
    }))]), m('.Form-group', [m('div', {
      className: 'passwordStrengthInlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'strongColor'))), m('div', {
      className: 'passwordStrengthInlineDivInput'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'strongColor', '111, 213, 127')
    }))]), m('.Form-group', [m('div', {
      className: 'passwordStrengthInlineDivLabel'
    }, m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'foreColor'))), m('div', {
      className: 'passwordStrengthInlineDivInput'
    }, m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'foreColor', ''),
      placeholder: '0, 0, 0',
      disabled: this.setting(settingsPrefix + 'displayMode', 'inputColor')() != 'inputBgColor'
    }))])];
  };

  return PasswordStrengthSettingsModal;
}(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/components/SettingsModal":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsModal']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsModal'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map