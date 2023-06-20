"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewList = void 0;
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _ViewType = require("./ViewType/ViewType");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ViewList = _ref => {
  let {
    viewList,
    handlePinned,
    handleClick
  } = _ref;
  return _react.default.createElement("div", {
    className: _stylesModule.default.wrapper
  }, viewList.map((item, index) => _react.default.createElement(_ViewType.ViewType, {
    key: index,
    view: item,
    onClick: handleClick,
    handleClickChange: () => handlePinned(index)
  })));
};
exports.ViewList = ViewList;
//# sourceMappingURL=ViewList.js.map