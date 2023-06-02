import { Meta, StoryObj } from '@storybook/react';

import { RangeButtons } from './RangeButtons';

type Story = StoryObj<typeof RangeButtons>;

const meta: Meta<typeof RangeButtons> = {
  component: RangeButtons,
};

export const RangeButtonsComponent: Story = {
  args: {
    handleAddDate: () => {
      console.log('adsadsadasadsadasd');
    },
    handleSubtractDate: () => {
      console.log();
    },
  },
};
export default meta;
