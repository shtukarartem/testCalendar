"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localeRu = void 0;
var _ru_RU = _interopRequireDefault(require("antd/es/time-picker/locale/ru_RU"));
var _ru_RU2 = _interopRequireDefault(require("rc-picker/lib/locale/ru_RU"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const localeRu = {
  lang: {
    placeholder: 'Выберите дату',
    yearPlaceholder: 'Выберите год',
    quarterPlaceholder: 'Выберите квартал',
    monthPlaceholder: 'Выберите месяц',
    weekPlaceholder: 'Выберите неделю',
    rangePlaceholder: ['Начальная дата', 'Конечная дата'],
    rangeYearPlaceholder: ['Начальный год', 'Год окончания'],
    rangeMonthPlaceholder: ['Начальный месяц', 'Конечный месяц'],
    rangeWeekPlaceholder: ['Начальная неделя', 'Конечная неделя'],
    shortMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    ..._ru_RU2.default
  },
  timePickerLocale: {
    ..._ru_RU.default
  }
};
exports.localeRu = localeRu;
//# sourceMappingURL=locale.js.map