import React from 'react';
type Props = {
    isDisabled: boolean;
    selectedPlaceholder: string;
    selectViewValue: string;
    handleAddDate: () => void;
    handleSubtractDate: () => void;
    handleViewsChange: (value: string) => void;
    handleMinusButton: () => void;
    handlePlusButton: () => void;
    handleSelect: (icon: string) => void;
};
export declare const Header: React.FC<Props>;
export {};
//# sourceMappingURL=Header.d.ts.map