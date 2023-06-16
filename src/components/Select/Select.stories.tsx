import { StoryObj } from '@storybook/react';

import { SelectOptions } from '../../types/types';
import { SelectComponent } from './Select';

const options: SelectOptions[] = [
  {
    title: 'Первый',
    value: '1',
  },
  {
    title: 'Второй',
    value: '2',
  },
  {
    title: 'Третий',
    value: '3',
  },
];

type Story = StoryObj<typeof SelectComponent>;

export const SelectStoryComponent: Story = {
  args: {
    value: '',
    options: options,
    handleChange: (value: string) => console.log(value),
    label: 'default',
  },
};

const SelectDefaultExport = { component: SelectComponent };

export default SelectDefaultExport;
