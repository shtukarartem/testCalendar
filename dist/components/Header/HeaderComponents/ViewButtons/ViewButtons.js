'use strict';

require('core-js/modules/es.object.define-property.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ViewButtons = void 0;
var _Add = _interopRequireDefault(require('@mui/icons-material/Add'));
var _Remove = _interopRequireDefault(require('@mui/icons-material/Remove'));
var _IconButton = _interopRequireDefault(require('@mui/material/IconButton'));
var _react = _interopRequireDefault(require('react'));
var _stylesModule = _interopRequireDefault(require('./styles.module.css'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var ViewButtons = function ViewButtons(_ref) {
  var handleMinusButton = _ref.handleMinusButton,
    handlePlusButton = _ref.handlePlusButton;
  return _react.default.createElement(
    'div',
    {
      className: _stylesModule.default.wrapper,
    },
    _react.default.createElement(
      _IconButton.default,
      {
        className: _stylesModule.default.addButton,
        onClick: handlePlusButton,
      },
      _react.default.createElement(_Add.default, null)
    ),
    _react.default.createElement(
      _IconButton.default,
      {
        className: _stylesModule.default.removeButton,
        onClick: handleMinusButton,
      },
      _react.default.createElement(_Remove.default, null)
    )
  );
};
exports.ViewButtons = ViewButtons;
//# sourceMappingURL=ViewButtons.js.map
