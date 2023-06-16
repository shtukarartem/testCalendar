import dayjs from 'dayjs';

import { BookingType } from '../types/types';

export declare const handleAddDate: (
  currentView: string,
  currentDate: dayjs.Dayjs
) => dayjs.Dayjs | undefined;
export declare const handleSubtractDate: (
  currentView: string,
  currentDate: dayjs.Dayjs
) => dayjs.Dayjs | undefined;
export declare const handldleCheckView: (selectedView: string) =>
  | {
      type: string;
      intervalCount: number;
    }
  | {
      type: string;
      intervalCount?: undefined;
    }
  | undefined;
export declare const handleCorrectDateDifference: (diff: number) => string;
export declare const handleSelectData: (icon: string) =>
  | {
      currentData: dayjs.Dayjs;
      currentView: {
        type: string;
        intervalCount: number;
      };
    }
  | undefined;
export declare const checkBusyRoom: (
  bookings: BookingType[],
  rooms: number,
  startDate: Date,
  endDate: Date
) => boolean;
export declare const handleSelectedPlaceholder: (title: string) => string;
export declare const handleFirstCharInUpperCase: (title: string) => string;
//# sourceMappingURL=utils.d.ts.map
