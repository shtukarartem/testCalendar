"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeButtons = void 0;
var _material = require("@mui/material");
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var RangeButtons = function RangeButtons(_ref) {
  var handleAddDate = _ref.handleAddDate,
    handleSubtractDate = _ref.handleSubtractDate;
  return React.createElement("div", {
    className: _stylesModule.default.wrapper
  }, React.createElement(_material.Button, {
    variant: "outlined",
    className: _stylesModule.default.button,
    onClick: handleSubtractDate
  }, '<'), React.createElement(_material.Button, {
    variant: "outlined",
    className: _stylesModule.default.button,
    onClick: handleAddDate
  }, '>'));
};
exports.RangeButtons = RangeButtons;
//# sourceMappingURL=RangeButtons.js.map