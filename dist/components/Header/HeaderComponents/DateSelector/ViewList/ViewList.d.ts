import { FC } from 'react';
import { ViewListType } from 'src/types/types';
type Props = {
    viewList: ViewListType[];
    handleClick: (title: string) => void;
    handlePinned: (index: number) => void;
};
export declare const ViewList: FC<Props>;
export {};
//# sourceMappingURL=ViewList.d.ts.map