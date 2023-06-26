/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { DateRange } from './DateRange';
type Story = StoryObj<typeof DateRange>;
export declare const DateRangeComponent: Story;
declare const DateRangeDefaultExport: {
    component: import("react").FC<{
        isFullWidth: boolean;
        isError: boolean;
        isOpen: boolean;
        onChange: (dates: (import("dayjs").Dayjs | null)[] | null) => void;
    }>;
};
export default DateRangeDefaultExport;
//# sourceMappingURL=DateRange.stories.d.ts.map