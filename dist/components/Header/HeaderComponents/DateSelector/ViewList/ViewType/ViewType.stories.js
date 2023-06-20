"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RangeButtonsComponent = void 0;
var _todayIcon = _interopRequireDefault(require("../../../../../../assets/images/todayIcon.svg"));
var _ViewType = require("./ViewType");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const meta = {
  component: _ViewType.ViewType
};
const RangeButtonsComponent = {
  args: {
    view: {
      icon: _todayIcon.default,
      title: 'Сегодня',
      isPinned: false
    },
    handleClickChange: () => console.log('Click')
  }
};
exports.RangeButtonsComponent = RangeButtonsComponent;
var _default = meta;
exports.default = _default;
//# sourceMappingURL=ViewType.stories.js.map