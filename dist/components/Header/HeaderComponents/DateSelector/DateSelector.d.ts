import 'dayjs/locale/ru';
import React from 'react';
import { ViewListType } from '../../../../types/types';
type Props = {
    isOpen?: boolean;
    selectPlaceholder: string;
    views: ViewListType[];
    onSubmit: () => void;
    onCancel: () => void;
    handleOpen: () => void;
    handleClose: () => void;
    handlePinned: (index: number) => void;
    handleViewClick: (title: string) => void;
};
export declare const DateSelector: React.FC<Props>;
export {};
//# sourceMappingURL=DateSelector.d.ts.map