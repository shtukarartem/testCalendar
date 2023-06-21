export type SelectOptions = {
  title: string;
  value: string;
};

export type RoomType = 'workPlace' | 'office' | 'meeting';

export type ViewListType = {
  icon: string;
  title: string;
  isPinned: boolean;
};
export type RentStatusType = 'paid' | 'booked' | 'overdue';

export type BookingType = {
  eventId: string;
  ownerId: string;
  roomId: string;
  startDate: Date;
  endDate: Date;
  comment: string;
  status: RentStatusType;
  client_data: {
    type: string;
    name: string;
    email: string;
    phone: string;
  };
};

export type DateCellType = {
  date: Date;
  groupIndex?: number;
  groups?: string;
  text: string;
};

export type RoomComponentType = {
  id: string;
  room: string;
  description: string;
  type: string;
};

export type OwnerType = {
  id: string;
  owner: string;
};

export type Scheme = {
  type: string;
  scheme: string;
  params?: Record<string, string>;
};
