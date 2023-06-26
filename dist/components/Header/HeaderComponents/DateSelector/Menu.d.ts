import dayjs from 'dayjs';
import React from 'react';
import { ViewListType } from '../../../../types/types';
type Props = {
    dates: (dayjs.Dayjs | null)[] | null;
    views: ViewListType[];
    isOpen: boolean;
    onSubmit: () => void;
    onCancel: () => void;
    handlePinned: (index: number) => void;
    handleViewClick: (title: string) => void;
    handleDates: (dates: (dayjs.Dayjs | null)[] | null) => void;
};
export declare const Menu: React.FC<Props>;
export {};
//# sourceMappingURL=Menu.d.ts.map