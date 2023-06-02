import { FC } from 'react';

import { changeViewOptions } from 'src/constants/constants';

import { Select } from '..';
import { RangeButtons } from './HeaderComponents/RangeButtons/RangeButtons';

interface Props {
  handleAddDate: () => void;
  handleSubtractDate: () => void;
  handleViewsChange: (value: string) => void;
  selectViewValue: string;
}

export const Header: FC<Props> = ({
  selectViewValue,
  handleSubtractDate,
  handleAddDate,
  handleViewsChange,
}) => (
  <div>
    <RangeButtons
      handleAddDate={handleAddDate}
      handleSubtractDate={handleSubtractDate}
    />
    <Select
      sx={{ height: '32px', fontSize: '14px' }}
      value={selectViewValue}
      label="asdsadasdasd"
      handleChange={handleViewsChange}
      options={changeViewOptions}
    />
  </div>
);
