"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RangeButtonsComponent = void 0;
var _todayIcon = _interopRequireDefault(require("../../../../../../assets/images/todayIcon.svg"));
var _ViewType = require("./ViewType");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var meta = {
  component: _ViewType.ViewType
};
var RangeButtonsComponent = {
  args: {
    view: {
      icon: _todayIcon.default,
      title: 'Сегодня',
      isPinned: false
    },
    handleClickChange: function handleClickChange() {
      return console.log('Click');
    }
  }
};
exports.RangeButtonsComponent = RangeButtonsComponent;
var _default = meta;
exports.default = _default;
//# sourceMappingURL=ViewType.stories.js.map