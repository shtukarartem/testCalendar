import { StoryObj } from '@storybook/react';

import { SelectOptions } from 'src/types/types';

import { Select } from '..';

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

type Story = StoryObj<typeof Select>;

export default {
  component: Select,
};

export const SelectComponent: Story = {
  args: {
    value: '',
    options: options,
    handleChange: (value) => console.log(value),
    label: 'default',
  },
};
