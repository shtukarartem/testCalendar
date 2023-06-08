import { PickerLocale } from 'antd/lib/date-picker/generatePicker';
import CalendarLocale from 'rc-picker/lib/locale/ru_RU';
import TimePickerLocale from 'antd/es/time-picker/locale/ru_RU';

// Merge into a locale object
export const localeRu: PickerLocale = {
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
    shortMonths: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};