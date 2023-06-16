"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipComponent = void 0;
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _OpenInNew = _interopRequireDefault(require("@mui/icons-material/OpenInNew"));
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TooltipComponent = function TooltipComponent(_ref) {
  var data = _ref.data,
    handleClose = _ref.handleClose;
  return _react.default.createElement("div", {
    className: _stylesModule.default.wrapper
  }, _react.default.createElement("div", {
    className: _stylesModule.default.icons
  }, _react.default.createElement(_material.IconButton, {
    disabled: true
  }, _react.default.createElement(_OpenInNew.default, null)), _react.default.createElement(_material.IconButton, {
    onClick: handleClose
  }, _react.default.createElement(_Close.default, null))), _react.default.createElement("div", {
    className: _stylesModule.default.fio
  }, data.text), _react.default.createElement("div", {
    className: _stylesModule.default.data
  }, _react.default.createElement("span", {
    className: _stylesModule.default.dataTitle
  }, "\u041A\u0440\u0430\u0439\u043D\u0438\u0439 \u0441\u0440\u043E\u043A"), _react.default.createElement("span", {
    className: _stylesModule.default.dateText
  }, data.endDate.getDate(), ".", data.endDate.getMonth(), ".", data.endDate.getFullYear(), " c", ' ', data.startDate.getHours(), ":", data.startDate.getMinutes(), " \u043F\u043E ", data.endDate.getHours(), ":", data.endDate.getMinutes())), _react.default.createElement("div", {
    className: _stylesModule.default.clientType
  }, _react.default.createElement("span", {
    className: _stylesModule.default.dataTitle
  }, "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430"), _react.default.createElement("span", {
    className: _stylesModule.default.dateText
  }, "\u0418\u041F")), _react.default.createElement("div", {
    className: _stylesModule.default.email
  }, data.email), _react.default.createElement("div", {
    className: _stylesModule.default.number
  }, data.number), _react.default.createElement("div", {
    className: _stylesModule.default.footer
  }, _react.default.createElement("button", {
    disabled: true,
    type: "button",
    onClick: function onClick(event) {
      event.stopPropagation();
    },
    className: _stylesModule.default.buttonLight
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0431\u0440\u043E\u043D\u044C"), _react.default.createElement("button", {
    disabled: true,
    type: "button",
    onClick: function onClick(event) {
      return event.stopPropagation();
    },
    className: _stylesModule.default.buttonLight
  }, "\u0417\u0432\u043E\u043D\u0438\u0442\u044C")));
};
exports.TooltipComponent = TooltipComponent;
//# sourceMappingURL=TooltipComponent.js.map