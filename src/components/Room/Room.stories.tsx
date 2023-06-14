import { StoryObj } from '@storybook/react';

import { Room } from './Room';

type Story = StoryObj<typeof Room>;

export const RoomComponent: Story = {
  args: {
    data: {
      room: 'Рабочее место 1',
      description: 'Окно',
      type: 'workPlace',
      id: 1,
      color: '#1e90ff',
    },
  },
};

const RoomDefaultExport = { component: Room };

export default RoomDefaultExport;
