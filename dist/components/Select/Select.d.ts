import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { FC } from 'react';

import { SelectOptions } from 'src/types/types';

type Props = {
  sx?: SxProps<Theme>;
  options: SelectOptions[];
  label?: string;
  value?: string;
  handleChange: (value: string) => void;
};
export declare const SelectComponent: FC<Props>;
export {};
//# sourceMappingURL=Select.d.ts.map
