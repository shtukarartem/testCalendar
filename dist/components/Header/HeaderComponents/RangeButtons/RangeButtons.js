"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeButtons = void 0;
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RangeButtons = _ref => {
  let {
    handleAddDate,
    handleSubtractDate
  } = _ref;
  return _react.default.createElement("div", {
    className: _stylesModule.default.wrapper
  }, _react.default.createElement(_IconButton.default, {
    className: _stylesModule.default.leftButton,
    onClick: handleSubtractDate
  }, '<'), _react.default.createElement(_IconButton.default, {
    className: _stylesModule.default.rightButton,
    onClick: handleAddDate
  }, '>'));
};
exports.RangeButtons = RangeButtons;
//# sourceMappingURL=RangeButtons.js.map