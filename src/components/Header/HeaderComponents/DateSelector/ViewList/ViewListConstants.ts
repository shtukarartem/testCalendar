import { ViewListType } from 'src/types/types';

import calendar_month_current from 'src/assets/images/calendar_month_current.svg';
import calendar_month_last from 'src/assets/images/calendar_month_last.svg';
import calendar_month_next from 'src/assets/images/calendar_month_next.svg';
import calendar_three_days_last from 'src/assets/images/calendar_three_days_last.svg';
import calendar_two_week_last from 'src/assets/images/calendar_two_week_last.svg';
import calendar_week_current from 'src/assets/images/calendar_week_current.svg';
import calendar_week_last from 'src/assets/images/calendar_week_last.svg';
import calendar_week_next from 'src/assets/images/calendar_week_next.svg';
import todayIcon from 'src/assets/images/todayIcon.svg';
import tomorrowIcon from 'src/assets/images/tomorrowIcon.svg';
import yesterdayIcon from 'src/assets/images/yesterdayIcon.svg';

export const viewList: ViewListType[] = [
  {
    icon: todayIcon,
    title: 'Сегодня',
    isPinned: true,
  },
  {
    icon: yesterdayIcon,
    title: 'Вчера',
    isPinned: false,
  },
  {
    icon: tomorrowIcon,
    title: 'Завтра',
    isPinned: false,
  },
  {
    icon: calendar_three_days_last,
    title: 'Последние 3 дня',
    isPinned: false,
  },
  {
    icon: calendar_week_current,
    title: 'Текущая неделя',
    isPinned: true,
  },
  {
    icon: calendar_week_last,
    title: 'Прошлая неделя',
    isPinned: false,
  },
  {
    icon: calendar_week_next,
    title: 'Следующая неделя',
    isPinned: false,
  },
  {
    icon: calendar_two_week_last,
    title: 'Последние две недели',
    isPinned: false,
  },
  {
    icon: calendar_month_current,
    title: 'Текущий месяц',
    isPinned: false,
  },
  {
    icon: calendar_month_last,
    title: 'Прошлый месяц',
    isPinned: false,
  },
  {
    icon: calendar_month_next,
    title: 'Следующий месяц',
    isPinned: false,
  },
];
