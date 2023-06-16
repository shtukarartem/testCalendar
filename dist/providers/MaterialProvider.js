'use strict';

require('core-js/modules/es.object.define-property.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.MaterialProvider = void 0;
var _styles = require('@mui/material/styles');
var _react = _interopRequireDefault(require('react'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var theme = (0, _styles.createTheme)({
  palette: {
    primary: {
      main: '#5C5CFF',
    },
    secondary: {
      main: '#1c1b1f',
    },
  },
});
var MaterialProvider = function MaterialProvider(_ref) {
  var children = _ref.children;
  return _react.default.createElement(
    _styles.StyledEngineProvider,
    {
      injectFirst: true,
    },
    _react.default.createElement(
      _styles.ThemeProvider,
      {
        theme: theme,
      },
      children
    )
  );
};
exports.MaterialProvider = MaterialProvider;
//# sourceMappingURL=MaterialProvider.js.map
