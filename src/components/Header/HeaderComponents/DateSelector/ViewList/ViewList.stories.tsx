import { Meta, StoryObj } from '@storybook/react';

import { ViewList } from './ViewList';
import { viewList } from './ViewListConstants';

type Story = StoryObj<typeof ViewList>;

const meta: Meta<typeof ViewList> = {
  component: ViewList,
};

export const RangeButtonsComponent: Story = {
  args: {
    viewList: viewList,
    handlePinned: (index) => console.log(index),
  },
};
export default meta;
