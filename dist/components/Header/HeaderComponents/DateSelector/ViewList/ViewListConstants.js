"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewList = void 0;
var _calendar_month_current = _interopRequireDefault(require("../../../../../assets/images/calendar_month_current.svg"));
var _calendar_month_last = _interopRequireDefault(require("../../../../../assets/images/calendar_month_last.svg"));
var _calendar_month_next = _interopRequireDefault(require("../../../../../assets/images/calendar_month_next.svg"));
var _calendar_three_days_last = _interopRequireDefault(require("../../../../../assets/images/calendar_three_days_last.svg"));
var _calendar_two_week_last = _interopRequireDefault(require("../../../../../assets/images/calendar_two_week_last.svg"));
var _calendar_week_current = _interopRequireDefault(require("../../../../../assets/images/calendar_week_current.svg"));
var _calendar_week_last = _interopRequireDefault(require("../../../../../assets/images/calendar_week_last.svg"));
var _calendar_week_next = _interopRequireDefault(require("../../../../../assets/images/calendar_week_next.svg"));
var _todayIcon = _interopRequireDefault(require("../../../../../assets/images/todayIcon.svg"));
var _tomorrowIcon = _interopRequireDefault(require("../../../../../assets/images/tomorrowIcon.svg"));
var _yesterdayIcon = _interopRequireDefault(require("../../../../../assets/images/yesterdayIcon.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var viewList = [{
  icon: _todayIcon.default,
  title: 'Сегодня',
  isPinned: true
}, {
  icon: _yesterdayIcon.default,
  title: 'Вчера',
  isPinned: false
}, {
  icon: _tomorrowIcon.default,
  title: 'Завтра',
  isPinned: false
}, {
  icon: _calendar_three_days_last.default,
  title: 'Последние 3 дня',
  isPinned: false
}, {
  icon: _calendar_week_current.default,
  title: 'Текущая неделя',
  isPinned: true
}, {
  icon: _calendar_week_last.default,
  title: 'Прошлая неделя',
  isPinned: false
}, {
  icon: _calendar_week_next.default,
  title: 'Следующая неделя',
  isPinned: false
}, {
  icon: _calendar_two_week_last.default,
  title: 'Последние две недели',
  isPinned: false
}, {
  icon: _calendar_month_current.default,
  title: 'Текущий месяц',
  isPinned: false
}, {
  icon: _calendar_month_last.default,
  title: 'Прошлый месяц',
  isPinned: false
}, {
  icon: _calendar_month_next.default,
  title: 'Следующий месяц',
  isPinned: false
}];
exports.viewList = viewList;
//# sourceMappingURL=ViewListConstants.js.map