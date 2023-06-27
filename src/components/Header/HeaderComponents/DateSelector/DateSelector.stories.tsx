import { StoryObj } from '@storybook/react';

import { DateSelector } from './DateSelector';

type Story = StoryObj<typeof DateSelector>;

export const DateSelectorComponent: Story = {
  args: {},
};
const DateSelectorDefaultExport = { component: DateSelector };

export default DateSelectorDefaultExport;
