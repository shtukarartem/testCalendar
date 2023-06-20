"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaterialProvider = void 0;
var _styles = require("@mui/material/styles");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const theme = (0, _styles.createTheme)({
  palette: {
    primary: {
      main: '#5C5CFF'
    },
    secondary: {
      main: '#1c1b1f'
    }
  }
});
const MaterialProvider = _ref => {
  let {
    children
  } = _ref;
  return _react.default.createElement(_styles.StyledEngineProvider, {
    injectFirst: true
  }, _react.default.createElement(_styles.ThemeProvider, {
    theme: theme
  }, children));
};
exports.MaterialProvider = MaterialProvider;
//# sourceMappingURL=MaterialProvider.js.map