'use strict';

var _react = _interopRequireDefault(require('react'));
var _client = _interopRequireDefault(require('react-dom/client'));
require('./index.css');
var _App = _interopRequireDefault(require('./App'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var root = _client.default.createRoot(document.getElementById('root'));
root.render(
  _react.default.createElement(
    _react.default.StrictMode,
    null,
    _react.default.createElement(_App.default, null)
  )
);
//# sourceMappingURL=index.js.map
