"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRange = void 0;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
require("dayjs/locale/ru");
var _antd = require("antd");
var _by_BY = _interopRequireDefault(require("antd/locale/by_BY"));
var _classnames = _interopRequireDefault(require("classnames"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _locale = require("./../../utils/locale");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var RangePicker = _antd.DatePicker.RangePicker;
var typeOfViewStyles = {
  standard: '',
  underline: _stylesModule.default.underline,
  tableCell: _stylesModule.default.tableCell
};
var sizeStyles = {
  xs: _stylesModule.default.sizeXS,
  s: _stylesModule.default.sizeS,
  m: _stylesModule.default.sizeM,
  l: _stylesModule.default.sizeL
};
var DateRange = function DateRange(_ref) {
  var _classNames;
  var isFullWidth = _ref.isFullWidth,
    isError = _ref.isError,
    onChange = _ref.onChange;
  return React.createElement(_antd.ConfigProvider, {
    locale: _by_BY.default
  }, React.createElement(RangePicker, {
    open: true,
    locale: _locale.localeRu,
    format: "DD MMMM YYYY",
    className: (0, _classnames.default)(_stylesModule.default.root, typeOfViewStyles['standard'], sizeStyles['s'], (_classNames = {}, _defineProperty(_classNames, _stylesModule.default.fullWidth, isFullWidth), _defineProperty(_classNames, _stylesModule.default.error, isError), _classNames)),
    popupClassName: _stylesModule.default.antPickerDropdown,
    onChange: onChange
  }));
};
exports.DateRange = DateRange;
//# sourceMappingURL=DateRange.js.map