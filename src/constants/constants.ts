import { SelectOptions } from 'src/types/types';

export const views = [
  {
    name: 'День',
    type: 'timelineDay',
  },
  {
    name: 'Неделя',
    type: 'timelineWeek',
  },
  { name: 'Месяц', type: 'timelineMonth' },
];

export const changeViewOptions: SelectOptions[] = [
  {
    title: 'День',
    value: 'timelineDay',
  },
  {
    title: 'Два дня',
    value: 'twoDays',
  },
  {
    title: 'Три дня',
    value: 'threeDays',
  },
  {
    title: 'Неделя',
    value: 'timelineWeek',
  },
  {
    title: 'Две недели',
    value: 'twoWeeks',
  },
  {
    title: 'Три недели',
    value: 'threeWeeks',
  },
  {
    title: 'Месяц',
    value: 'timelineMonth',
  },
];
