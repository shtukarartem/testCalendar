"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _localization = require("devextreme/localization");
var _react = require("react");
var _MaterialProvider = require("src/providers/MaterialProvider");
require("./App.css");
require("devextreme/dist/css/dx.light.css");
var _Calendar = require("./components/Calendar/Calendar");
var App = function App() {
  (0, _react.useEffect)(function () {
    (0, _localization.locale)('ru');
  }, []);
  return React.createElement(_MaterialProvider.MaterialProvider, null, React.createElement(_Calendar.Calendar, null));
};
var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map