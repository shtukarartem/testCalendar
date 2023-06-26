import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import React from 'react';
import { SelectOptions } from '../../types/types';
type Props = {
    sx?: SxProps<Theme>;
    options: SelectOptions[];
    label?: string;
    value?: string;
    handleChange: (value: string) => void;
};
export declare const SelectComponent: React.FC<Props>;
export {};
//# sourceMappingURL=Select.d.ts.map