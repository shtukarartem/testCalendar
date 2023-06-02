import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RangeButtons } from './RangeButtons';

export default {
  title: 'Components/Header/RangeButtons',
  component: RangeButtons,
} as ComponentMeta<typeof RangeButtons>;

export const RangeButtonsComponent: ComponentStory<typeof RangeButtons> = (
  args
) => <RangeButtons {...args} />;

RangeButtonsComponent.args = {
  handleAddDate: () => {
    console.log();
  },
  handleSubtractDate: () => {
    console.log();
  },
};
