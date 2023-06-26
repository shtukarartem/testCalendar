"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipComponent = void 0;
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _OpenInNew = _interopRequireDefault(require("@mui/icons-material/OpenInNew"));
var _material = require("@mui/material");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _call = _interopRequireDefault(require("../../assets/images/call.svg"));
var _email = _interopRequireDefault(require("../../assets/images/email.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TooltipComponent = function TooltipComponent(_ref) {
  var data = _ref.data,
    openEditModal = _ref.openEditModal,
    handleClose = _ref.handleClose;
  return _react.default.createElement("div", {
    className: _stylesModule.default.wrapper
  }, _react.default.createElement("div", {
    className: _stylesModule.default.icons
  }, _react.default.createElement(_material.IconButton, {
    onClick: function onClick() {
      return openEditModal === null || openEditModal === void 0 ? void 0 : openEditModal(data.eventId);
    }
  }, _react.default.createElement(_OpenInNew.default, null)), _react.default.createElement(_material.IconButton, {
    onClick: handleClose
  }, _react.default.createElement(_Close.default, null))), _react.default.createElement("span", {
    className: _stylesModule.default.fio
  }, data.client_data.name), _react.default.createElement("div", {
    className: _stylesModule.default.data
  }, _react.default.createElement("span", {
    className: _stylesModule.default.dataTitle
  }, "\u0421\u0440\u043E\u043A \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"), _react.default.createElement("span", {
    className: _stylesModule.default.dateText
  }, (0, _dayjs.default)(data.endDate).format('DD.MM.YYYY'), " c ", (0, _dayjs.default)(data.startDate).format('HH:mm'), " \u043F\u043E", ' ', (0, _dayjs.default)(data.endDate).format('HH:mm'))), _react.default.createElement("div", {
    className: _stylesModule.default.clientType
  }, _react.default.createElement("span", {
    className: _stylesModule.default.dataTitle
  }, "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 defalt"), _react.default.createElement("span", {
    className: _stylesModule.default.dateText
  }, data.client_data.type)), _react.default.createElement("div", {
    className: _stylesModule.default.email
  }, _react.default.createElement("img", {
    src: _email.default,
    alt: ""
  }), data.client_data.email), _react.default.createElement("div", {
    className: _stylesModule.default.number
  }, _react.default.createElement("img", {
    src: _call.default,
    alt: ""
  }), data.client_data.phone), _react.default.createElement("div", {
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