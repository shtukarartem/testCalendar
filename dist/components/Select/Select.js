'use strict';

require('core-js/modules/es.object.define-property.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.SelectComponent = void 0;
require('core-js/modules/es.array.map.js');
var _MenuItem = _interopRequireDefault(require('@mui/material/MenuItem'));
var _Select = _interopRequireDefault(require('@mui/material/Select'));
var _react = _interopRequireDefault(require('react'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var SelectComponent = function SelectComponent(_ref) {
  var options = _ref.options,
    value = _ref.value,
    sx = _ref.sx,
    label = _ref.label,
    handleChange = _ref.handleChange;
  return _react.default.createElement(
    _Select.default,
    {
      sx: sx,
      value: value,
      label: label !== null && label !== void 0 ? label : 'test',
      onChange: function onChange(event) {
        handleChange(event.target.value);
      },
    },
    options.map(function (item, index) {
      return _react.default.createElement(
        _MenuItem.default,
        {
          key: index,
          value: item.value,
        },
        item.title
      );
    })
  );
};
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=Select.js.map
