import React from 'react';
import { BookingType, OwnerType, RoomComponentType } from '../../types/types';
type Props = {
    owners?: OwnerType[];
    rooms?: RoomComponentType[];
    events?: BookingType[];
    updateEvent?: () => void;
    addEvent?: () => void;
    openUpdateModal?: () => void;
    openAddingModal?: () => void;
    closeModal?: () => void;
};
export declare const Calendar: React.FC<Props>;
export {};
//# sourceMappingURL=Calendar.d.ts.map