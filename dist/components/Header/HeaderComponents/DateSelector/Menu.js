"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;
var _antd = require("antd");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _utils = require("../../../../utils/utils");
var _DateRange = require("../../../DateRange/DateRange");
var _ViewList = require("./ViewList/ViewList");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Menu = _ref => {
  let {
    views,
    dates,
    isOpen,
    onSubmit,
    onCancel,
    handlePinned,
    handleViewClick,
    handleDates
  } = _ref;
  return _react.default.createElement("div", {
    className: _stylesModule.default.items
  }, _react.default.createElement("div", {
    className: _stylesModule.default.views
  }, _react.default.createElement(_ViewList.ViewList, {
    handleClick: handleViewClick,
    viewList: views,
    handlePinned: handlePinned
  }), _react.default.createElement("div", {
    className: _stylesModule.default.switchContainer
  }, _react.default.createElement("div", {
    className: _stylesModule.default.switchText
  }, "\u0412\u044B\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u043D\u0438"), _react.default.createElement(_antd.Switch, {
    className: _stylesModule.default.switch,
    size: "small"
  }))), _react.default.createElement("div", {
    className: _stylesModule.default.dateRange
  }, _react.default.createElement(_DateRange.DateRange, {
    isOpen: isOpen,
    isFullWidth: true,
    isError: false,
    onChange: handleDates
  }), _react.default.createElement("div", {
    className: _stylesModule.default.dateRangeFooter
  }, dates && _react.default.createElement("div", {
    className: _stylesModule.default.daysCounter
  }, ' ', _react.default.createElement("div", {
    className: _stylesModule.default.counter
  }, (0, _utils.handleCorrectDateDifference)((0, _dayjs.default)(dates[1]).diff((0, _dayjs.default)(dates[0]), 'd'))), _react.default.createElement("div", {
    className: _stylesModule.default.range
  }, "c ", (0, _dayjs.default)(dates[0]).locale('ru').format('DD MMMM'), " \u043F\u043E", ' ', (0, _dayjs.default)(dates[1]).locale('ru').format('DD MMMM'))), _react.default.createElement("div", {
    className: _stylesModule.default.buttons
  }, _react.default.createElement(_antd.Button, {
    onClick: onCancel,
    className: _stylesModule.default.selectButton
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), _react.default.createElement(_antd.Button, {
    onClick: onSubmit,
    className: _stylesModule.default.selectButton
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")))));
};
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map