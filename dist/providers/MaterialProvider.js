"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaterialProvider = void 0;
var _styles = require("@mui/material/styles");
var theme = (0, _styles.createTheme)({
  palette: {
    primary: {
      main: '#5C5CFF'
    },
    secondary: {
      main: '#1c1b1f'
    }
  }
});
var MaterialProvider = function MaterialProvider(_ref) {
  var children = _ref.children;
  return React.createElement(_styles.StyledEngineProvider, {
    injectFirst: true
  }, React.createElement(_styles.ThemeProvider, {
    theme: theme
  }, children));
};
exports.MaterialProvider = MaterialProvider;
//# sourceMappingURL=MaterialProvider.js.map