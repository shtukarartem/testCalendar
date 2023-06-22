import dayjs from 'dayjs';

import { BookingType } from '../types/types';

export const handleAddDate = (currentView: string, currentDate: dayjs.Dayjs) => {
  switch (currentView) {
    case 'timelineMonth':
      return currentDate.add(1, 'month');
    case 'timelineWeek':
      return currentDate.add(1, 'week');
    case 'twoWeeks':
      return currentDate.add(2, 'week');
    case 'threeWeeks':
      return currentDate.add(1, 'week');
    case 'timelineDay':
      return currentDate.add(1, 'day');
    case 'twoDays':
      return currentDate.add(2, 'day');
    case 'threeDays':
      return currentDate.add(1, 'day');
  }
};

export const handleSubtractDate = (currentView: string, currentDate: dayjs.Dayjs) => {
  switch (currentView) {
    case 'timelineMonth':
      return currentDate.subtract(1, 'month');
    case 'timelineWeek':
      return currentDate.subtract(1, 'week');
    case 'twoWeeks':
      return currentDate.subtract(2, 'week');
    case 'threeWeeks':
      return currentDate.subtract(1, 'week');
    case 'timelineDay':
      return currentDate.subtract(1, 'day');
    case 'twoDays':
      return currentDate.subtract(2, 'day');
    case 'threeDays':
      return currentDate.subtract(1, 'day');
  }
};

export const handldleCheckView = (selectedView: string) => {
  switch (selectedView) {
    case 'timelineDay':
      return { type: 'timelineDay', intervalCount: 1 };
    case 'twoDays':
      return { type: 'timelineDay', intervalCount: 2 };
    case 'threeDays':
      return { type: 'timelineDay', intervalCount: 3 };
    case 'timelineWeek':
      return { type: 'timelineWeek', intervalCount: 1, cellDuration: 1440 };
    case 'threeWeeks':
      return { type: 'timelineWeek', intervalCount: 3, cellDuration: 1440 };
    case 'twoWeeks':
      return { type: 'timelineWeek', intervalCount: 2, cellDuration: 1440 };
    case 'timelineMonth':
      return { type: 'timelineMonth', intervalCount: 1 };
  }
};
export const handldleSelectTitle = (data: { type: string; intervalCount: number }) => {
  if (data.type === 'timelineDay' && data.intervalCount === 1) {
    if (data.intervalCount === 1) return 'timelineDay';
    if (data.intervalCount === 2) return 'twoDays';
    if (data.intervalCount === 3) return 'threeDays';
  }
  if (data.type === 'timelineWeek') {
    if (data.intervalCount === 1) return 'timelineWeek';
    if (data.intervalCount === 2) return 'twoWeeks';
    if (data.intervalCount === 3) return 'threeWeeks';
  }

  if (data.type === 'timelineMonth' && data.intervalCount === 1) return 'timelineMonth';
  return data.type;
};
export const handleCorrectDateDifference = (diff: number) => {
  diff++;
  if (Math.abs(diff) % 100 > 10 && Math.abs(diff) % 100 < 20) {
    return `${diff} дней: `;
  }
  if (diff % 10 > 1 && diff % 10 < 5) {
    return `${diff} дня: `;
  }
  if (diff % 10 === 1) {
    return `${diff} день: `;
  }
  return `${diff} дней: `;
};

export const handleSelectData = (icon: string) => {
  switch (icon) {
    case 'Сегодня':
      return { currentData: dayjs(), currentView: { type: 'timelineDay', intervalCount: 1 } };
    case 'Вчера':
      return {
        currentData: dayjs().subtract(1, 'day'),
        currentView: { type: 'timelineDay', intervalCount: 1 },
      };
    case 'Завтра':
      return {
        currentData: dayjs().add(1, 'day'),
        currentView: { type: 'timelineDay', intervalCount: 1 },
      };
    case 'Последние 3 дня':
      return {
        currentData: dayjs().subtract(2, 'day'),
        currentView: { type: 'timelineDay', intervalCount: 3, cellDuration: 1440 },
      };
    case 'Текущая неделя':
      return { currentData: dayjs(), currentView: { type: 'timelineWeek', intervalCount: 1, cellDuration: 1440 } };
    case 'Прошлая неделя':
      return {
        currentData: dayjs().subtract(1, 'week'),
        currentView: { type: 'timelineWeek', intervalCount: 1, cellDuration: 1440 },
      };
    case 'Следующая неделя':
      return {
        currentData: dayjs().add(1, 'week'),
        currentView: { type: 'timelineWeek', intervalCount: 1, cellDuration: 1440 },
      };
    case 'Последние две недели':
      return {
        currentData: dayjs().subtract(1, 'week'),
        currentView: { type: 'timelineWeek', intervalCount: 2, cellDuration: 1440 },
      };
    case 'Текущий месяц':
      return { currentData: dayjs(), currentView: { type: 'timelineMonth', intervalCount: 1 } };
    case 'Прошлый месяц':
      return {
        currentData: dayjs().subtract(1, 'month'),
        currentView: { type: 'timelineMonth', intervalCount: 1 },
      };
    case 'Следующий месяц':
      return {
        currentData: dayjs().add(1, 'month'),
        currentView: { type: 'timelineMonth', intervalCount: 1 },
      };
  }
};
const isBetween = (date: Date, start: Date, end: Date) => start < date && date < end;
const isEqualDates = (date1: Date, date2: Date) => {
  if (date1 > date2 || date1 < date2) {
    return false;
  } else {
    return true;
  }
};

export const checkBusyRoom = (
  bookings: BookingType[],
  roomId: string,
  startDate: Date,
  endDate: Date
) =>
  bookings.some(
    (item) =>
      item.roomId === roomId &&
      (isBetween(startDate, item.startDate, item.endDate) ||
        isBetween(endDate, item.startDate, item.endDate) ||
        (isEqualDates(startDate, item.startDate) && isEqualDates(startDate, item.startDate)))
  );

export const handleFirstCharInUpperCase = (title: string) =>
  title.charAt(0).toUpperCase() + title.slice(1);
