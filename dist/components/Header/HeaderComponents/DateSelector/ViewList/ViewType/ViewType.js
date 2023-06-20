"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewType = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _push_pin = _interopRequireDefault(require("../../../../../../assets/images/push_pin.svg"));
var _unpush_pin = _interopRequireDefault(require("../../../../../../assets/images/unpush_pin.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ViewType = _ref => {
  let {
    view,
    handleClickChange,
    onClick
  } = _ref;
  return _react.default.createElement("div", {
    onClick: () => onClick(view.title),
    className: _stylesModule.default.wrapper
  }, _react.default.createElement("div", {
    className: _stylesModule.default.title
  }, _react.default.createElement("img", {
    src: view.icon,
    alt: "icon"
  }), _react.default.createElement("div", {
    className: _stylesModule.default.description
  }, view.title)), _react.default.createElement("div", {
    className: _stylesModule.default.pin
  }, view.isPinned ? _react.default.createElement("img", {
    onClick: event => {
      handleClickChange();
      event.stopPropagation();
    },
    src: _push_pin.default,
    alt: ""
  }) : _react.default.createElement("img", {
    className: _stylesModule.default.unpin,
    onClick: event => {
      handleClickChange();
      event.stopPropagation();
    },
    src: _unpush_pin.default,
    alt: ""
  })));
};
exports.ViewType = ViewType;
//# sourceMappingURL=ViewType.js.map