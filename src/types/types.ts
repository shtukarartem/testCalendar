export type SelectOptions = {
  title: string;
  value: string;
};

export type RoomType = 'workPlace' | 'office' | 'meeting';

export type RentStatusType = 'paid' | 'booked' | 'overdue';

export type BookingType = {
  text: string;
  ownerId: number[];
  startDate: Date;
  endDate: Date;
  rooms: number;
  email: string;
  number: string;
  status: RentStatusType;
};
