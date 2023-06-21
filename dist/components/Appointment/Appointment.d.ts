import dayjs from 'dayjs';
import React from 'react';
import { BookingType, Scheme } from '../../types/types';
type Props = {
    data: BookingType;
    currentDate: dayjs.Dayjs;
    OpenEventWrapper?: React.ComponentType<any>;
    modalUrl?: Scheme;
    linkDispatcher?: () => void;
};
export declare const Appointment: React.FC<Props>;
export {};
//# sourceMappingURL=Appointment.d.ts.map