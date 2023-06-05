import dayjs from 'dayjs';

export const handleAddDate = (
  currentView: string,
  currentDate: dayjs.Dayjs
) => {
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

export const handleSubtractDate = (
  currentView: string,
  currentDate: dayjs.Dayjs
) => {
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
      return { type: 'timelineWeek', intervalCount: 1 };
    case 'threeWeeks':
      return { type: 'timelineWeek', intervalCount: 3 };
    case 'twoWeeks':
      return { type: 'timelineWeek', intervalCount: 2 };
    case 'timelineMonth':
      return { type: 'timelineMonth'};
  }
};
