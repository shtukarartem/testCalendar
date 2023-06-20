"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinnedViews = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PinnedViews = _ref => {
  let {
    views,
    handleSelect
  } = _ref;
  const [isSelect, setIsSelect] = (0, _react.useState)(false);
  const [selectIcon, setSelectIcon] = (0, _react.useState)('');
  const handleClick = field => {
    setIsSelect(true);
    setSelectIcon(field);
  };
  return _react.default.createElement("div", {
    className: _stylesModule.default.wrapper
  }, views.map((item, index) => _react.default.createElement(_react.default.Fragment, null, item.isPinned && _react.default.createElement("img", {
    key: index,
    className: (0, _classnames.default)(_stylesModule.default.icon, {
      [_stylesModule.default.select]: isSelect && selectIcon === item.title
    }),
    onClick: () => {
      handleClick(item.title);
      handleSelect(item.title);
    },
    src: item.icon,
    alt: ""
  }))));
};
exports.PinnedViews = PinnedViews;
//# sourceMappingURL=PinnedViews.js.map