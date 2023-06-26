/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { DateSelector } from './DateSelector';
type Story = StoryObj<typeof DateSelector>;
export declare const DateSelectorComponent: Story;
declare const DateSelectorDefaultExport: {
    component: import("react").FC<{
        isOpen?: boolean | undefined;
        selectPlaceholder: string;
        views: import("../../../../types/types").ViewListType[];
        onSubmit: () => void;
        onCancel: () => void;
        handleOpen: () => void;
        handleClose: () => void;
        handlePinned: (index: number) => void;
        handleViewClick: (title: string) => void;
    }>;
};
export default DateSelectorDefaultExport;
//# sourceMappingURL=DateSelector.stories.d.ts.map