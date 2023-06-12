/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { SelectOptions } from 'src/types/types';
import { SelectComponent } from './Select';
type Story = StoryObj<typeof SelectComponent>;
export declare const SelectStoryComponent: Story;
declare const SelectDefaultExport: {
    component: import("react").FC<{
        sx?: import("@mui/system").SxProps<import("@mui/material").Theme> | undefined;
        options: SelectOptions[];
        label?: string | undefined;
        value?: string | undefined;
        handleChange: (value: string) => void;
    }>;
};
export default SelectDefaultExport;
//# sourceMappingURL=Select.stories.d.ts.map