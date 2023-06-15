import 'dayjs/locale/ru';
import { Dayjs } from 'dayjs';
import React from 'react';
export type TypeOfView = 'standard' | 'tableCell' | 'underline';
export type SizeType = 'xs' | 's' | 'm' | 'l';
type Props = {
    isFullWidth: boolean;
    isError: boolean;
    isOpen: boolean;
    onChange: (dates: null | (Dayjs | null)[]) => void;
};
export declare const DateRange: React.FC<Props>;
export {};
//# sourceMappingURL=DateRange.d.ts.map