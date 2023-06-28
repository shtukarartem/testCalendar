import { Theme } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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

export const SelectComponent: React.FC<Props> = ({ options, value, sx, handleChange }) => (
  <Select
    sx={sx}
    value={value}
    onChange={(event: SelectChangeEvent<string>) => {
      handleChange(event.target.value);
    }}
  >
    {options.map((item, index) => (
      <MenuItem key={index} value={item.value}>
        {item.title}
      </MenuItem>
    ))}
  </Select>
);
