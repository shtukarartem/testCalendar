"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewList = void 0;
require("core-js/modules/es.array.map.js");
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _ViewType = require("./ViewType/ViewType");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ViewList = function ViewList(_ref) {
  var viewList = _ref.viewList,
    handlePinned = _ref.handlePinned,
    handleClick = _ref.handleClick;
  return _react.default.createElement("div", {
    className: _stylesModule.default.wrapper
  }, viewList.map(function (item, index) {
    return _react.default.createElement(_ViewType.ViewType, {
      key: index,
      view: item,
      onClick: handleClick,
      handleClickChange: function handleClickChange() {
        return handlePinned(index);
      }
    });
  }));
};
exports.ViewList = ViewList;
//# sourceMappingURL=ViewList.js.map