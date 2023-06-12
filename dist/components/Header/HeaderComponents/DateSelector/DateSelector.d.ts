import 'dayjs/locale/ru';
import { FC } from 'react';
import { ViewListType } from 'src/types/types';
type Props = {
    isOpen?: boolean;
    selectPlaceholder: string;
    views: ViewListType[];
    onSubmit: () => void;
    onCancel: () => void;
    handleOpen: () => void;
    handlePinned: (index: number) => void;
    handleViewClick: (title: string) => void;
};
export declare const DateSelector: FC<Props>;
export {};
//# sourceMappingURL=DateSelector.d.ts.map