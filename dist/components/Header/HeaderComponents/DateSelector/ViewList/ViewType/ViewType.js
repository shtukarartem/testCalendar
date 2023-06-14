"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewType = void 0;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _push_pin = _interopRequireDefault(require("../../../../../../assets/images/push_pin.svg"));
var _unpush_pin = _interopRequireDefault(require("../../../../../../assets/images/unpush_pin.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ViewType = function ViewType(_ref) {
  var view = _ref.view,
    handleClickChange = _ref.handleClickChange,
    _onClick = _ref.onClick;
  return React.createElement("div", {
    className: _stylesModule.default.wrapper
  }, React.createElement("div", {
    className: _stylesModule.default.title,
    onClick: function onClick() {
      return _onClick(view.title);
    }
  }, React.createElement("img", {
    src: view.icon,
    alt: "icon"
  }), React.createElement("div", {
    className: _stylesModule.default.description
  }, view.title)), React.createElement("div", {
    className: _stylesModule.default.pin
  }, view.isPinned ? React.createElement("img", {
    onClick: function onClick(event) {
      handleClickChange();
      event.stopPropagation();
    },
    src: _push_pin.default,
    alt: ""
  }) : React.createElement("img", {
    className: _stylesModule.default.unpin,
    onClick: function onClick(event) {
      handleClickChange();
      event.stopPropagation();
    },
    src: _unpush_pin.default,
    alt: ""
  })));
};
exports.ViewType = ViewType;
//# sourceMappingURL=ViewType.js.map