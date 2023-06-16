'use strict';

require('core-js/modules/es.object.define-property.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.MoreButton = void 0;
var _react = _interopRequireDefault(require('react'));
var _stylesModule = _interopRequireDefault(require('./styles.module.css'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var MoreButton = function MoreButton(_ref) {
  var data = _ref.data;
  var appointmentCount = data.appointmentCount;
  return _react.default.createElement(
    'div',
    {
      className: _stylesModule.default.wrapper,
    },
    appointmentCount,
    ' more'
  );
};
exports.MoreButton = MoreButton;
//# sourceMappingURL=MoreButton.js.map
