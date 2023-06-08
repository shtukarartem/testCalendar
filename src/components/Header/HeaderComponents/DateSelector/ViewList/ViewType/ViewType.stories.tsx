import { Meta, StoryObj } from "@storybook/react";
import { ViewType } from "./ViewType";
import todayIcon from 'src/assets/images/todayIcon.svg'

type Story = StoryObj<typeof ViewType>;

const meta: Meta<typeof ViewType> = {
  component: ViewType,
};

export const RangeButtonsComponent: Story = {
  args: {
   view: {
     icon: todayIcon,
     title: 'Сегодня',
     isPinned:false,
   },
   handleClickChange:() => console.log('Click'),
  },
};
export default meta;