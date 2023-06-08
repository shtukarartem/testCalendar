import { StoryObj } from "@storybook/react";
import { DateRange } from "./DateRange";


type Story = StoryObj<typeof DateRange>;

export const DateRangeComponent: Story = {
  args: {
    isError:false,
    isFullWidth:false,
    onChange:(dates) => console.log(dates)
  }
}
const DateRangeDefaultExport = {component: DateRange};

export default DateRangeDefaultExport