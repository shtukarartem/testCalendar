import { FC } from 'react';

import { SelectComponent } from 'src/components/Select/Select';
import { changeViewOptions } from 'src/constants/constants';

import { RangeButtons } from './HeaderComponents/RangeButtons/RangeButtons';

type Props = {
  handleAddDate: () => void;
  handleSubtractDate: () => void;
  handleViewsChange: (value: string) => void;
  selectViewValue: string;
};

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
    <SelectComponent
      sx={{ height: '32px', fontSize: '14px' }}
      value={selectViewValue}
      label="asdsadasdasd"
      handleChange={handleViewsChange}
      options={changeViewOptions}
    />
  </div>
);
