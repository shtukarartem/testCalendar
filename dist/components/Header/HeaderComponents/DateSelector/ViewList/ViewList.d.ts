import React from 'react';

import { ViewListType } from '../../../../../types/types';

type Props = {
  viewList: ViewListType[];
  handleClick: (title: string) => void;
  handlePinned: (index: number) => void;
};
export declare const ViewList: React.FC<Props>;
export {};
//# sourceMappingURL=ViewList.d.ts.map
