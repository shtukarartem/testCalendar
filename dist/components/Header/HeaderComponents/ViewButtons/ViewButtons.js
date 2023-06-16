'use strict';

require('core-js/modules/es.object.define-property.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ViewButtons = void 0;
var _Button = _interopRequireDefault(require('@mui/material/Button/Button'));
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
      _Button.default,
      {
        variant: 'outlined',
        className: _stylesModule.default.button,
        onClick: handlePlusButton,
      },
      '+'
    ),
    _react.default.createElement(
      _Button.default,
      {
        variant: 'outlined',
        className: _stylesModule.default.button,
        onClick: handleMinusButton,
      },
      '-'
    )
  );
};
exports.ViewButtons = ViewButtons;
//# sourceMappingURL=ViewButtons.js.map
