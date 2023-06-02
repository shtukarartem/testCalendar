import dayjs from 'dayjs';

export const handleAddDate = (
  currentView: string,
  currentDate: dayjs.Dayjs
) => {
  switch (currentView) {
    case 'Месяц':
      return currentDate.add(1, 'month');
    case 'Неделя':
      return currentDate.add(7, 'day');
    case 'День':
      return currentDate.add(1, 'day');
  }
};

export const handleSubtractDate = (
  currentView: string,
  currentDate: dayjs.Dayjs
) => {
  switch (currentView) {
    case 'Месяц':
      return currentDate.subtract(1, 'month');
    case 'Неделя':
      return currentDate.subtract(7, 'day');
    case 'День':
      return currentDate.subtract(1, 'day');
  }
};
