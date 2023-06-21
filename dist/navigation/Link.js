"use strict";

require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _navigation = require("src/navigation");
var _excluded = ["url", "children", "dispatcher"],
  _excluded2 = ["onClick"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Link = function Link(_ref) {
  var url = _ref.url,
    children = _ref.children,
    dispatcher = _ref.dispatcher,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  console.log('inside CRMLink', url);
  if (!url) {
    return null;
  }
  var to = null;
  try {
    to = (0, _reactRouterDom.generatePath)(url.scheme, url.params);
  } catch (e) {}
  if (!to) {
    return null;
  }
  var handler = url.type === 'page' ? _navigation.makePagePath : _navigation.makeModalPath;
  var onClick = props.onClick,
    otherProps = _objectWithoutProperties(props, _excluded2);
  var handleClick = function handleClick(e) {
    console.log('handleClick', url);
    dispatcher === null || dispatcher === void 0 ? void 0 : dispatcher();
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  return _react.default.createElement(_reactRouterDom.NavLink, _extends({
    to: {
      pathname: handler(pathname, to)
    }
  }, otherProps, {
    onClick: handleClick
  }), children);
};
exports.Link = Link;
//# sourceMappingURL=Link.js.map