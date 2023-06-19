/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { Room } from './Room';
type Story = StoryObj<typeof Room>;
export declare const RoomComponent: Story;
declare const RoomDefaultExport: {
    component: import("react").FC<{
        data: {
            room: string;
            description: string;
            type: import("../../types/types").RoomType;
            id: number;
            color: string;
        };
    }>;
};
export default RoomDefaultExport;
//# sourceMappingURL=Room.stories.d.ts.map