"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRange = void 0;
require("dayjs/locale/ru");
var _antd = require("antd");
var _by_BY = _interopRequireDefault(require("antd/locale/by_BY"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _locale = require("./../../utils/locale");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  RangePicker
} = _antd.DatePicker;
const typeOfViewStyles = {
  standard: '',
  underline: _stylesModule.default.underline,
  tableCell: _stylesModule.default.tableCell
};
const sizeStyles = {
  xs: _stylesModule.default.sizeXS,
  s: _stylesModule.default.sizeS,
  m: _stylesModule.default.sizeM,
  l: _stylesModule.default.sizeL
};
const DateRange = _ref => {
  let {
    isFullWidth,
    isError,
    onChange
  } = _ref;
  return _react.default.createElement(_antd.ConfigProvider, {
    locale: _by_BY.default
  }, _react.default.createElement(RangePicker, {
    open: true,
    locale: _locale.localeRu,
    format: "DD MMMM YYYY",
    className: (0, _classnames.default)(_stylesModule.default.root, typeOfViewStyles['standard'], sizeStyles['s'], {
      [_stylesModule.default.fullWidth]: isFullWidth,
      [_stylesModule.default.error]: isError
    }),
    popupClassName: _stylesModule.default.antPickerDropdown,
    onChange: onChange
  }));
};
exports.DateRange = DateRange;
//# sourceMappingURL=DateRange.js.map