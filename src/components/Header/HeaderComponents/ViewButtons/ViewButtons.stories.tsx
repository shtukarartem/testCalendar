import { Meta, StoryObj } from "@storybook/react";
import { ViewButtons } from "./ViewButtons";

type Story = StoryObj<typeof ViewButtons>;

const meta: Meta<typeof ViewButtons> = {
  component: ViewButtons,
};

export const RangeButtonsComponent: Story = {
  args: {
    handlePlusButton: () => {
      console.log('adsadsadasadsadasd');
    },
    handleMinusButton: () => {
      console.log();
    },
  },
};
export default meta;