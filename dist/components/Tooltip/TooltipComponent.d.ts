import React, { MouseEvent } from 'react';
import { BookingType } from '../../types/types';
type Props = {
    data: BookingType;
    handleClose: (e: MouseEvent<HTMLButtonElement>) => void;
    openEditModal?: (id: string) => void;
};
export declare const TooltipComponent: React.FC<Props>;
export {};
//# sourceMappingURL=TooltipComponent.d.ts.map