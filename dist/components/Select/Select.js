"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectComponent = void 0;
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SelectComponent = _ref => {
  let {
    options,
    value,
    sx,
    label,
    handleChange
  } = _ref;
  return _react.default.createElement(_Select.default, {
    sx: sx,
    value: value,
    label: label !== null && label !== void 0 ? label : 'test',
    onChange: event => {
      handleChange(event.target.value);
    }
  }, options.map((item, index) => _react.default.createElement(_MenuItem.default, {
    key: index,
    value: item.value
  }, item.title)));
};
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=Select.js.map