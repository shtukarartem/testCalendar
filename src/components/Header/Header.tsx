import { FC } from 'react';

import { SelectComponent } from 'src/components/Select/Select';
import { changeViewOptions } from 'src/constants/constants';

import styles from './styles.module.css';

import { RangeButtons } from './HeaderComponents/RangeButtons/RangeButtons';
import { ViewButtons } from './HeaderComponents/ViewButtons/ViewButtons';

type Props = {
  handleAddDate: () => void;
  handleSubtractDate: () => void;
  handleViewsChange: (value: string) => void;
  selectViewValue: string;
  handleMinusButton: () => void;
  handlePlusButton: () => void;
};

export const Header: FC<Props> = ({
  selectViewValue,
  handleSubtractDate,
  handleAddDate,
  handleViewsChange,
  handleMinusButton,
  handlePlusButton,
}) => (
  <div className={styles.wrapper}>
    <RangeButtons handleAddDate={handleAddDate} handleSubtractDate={handleSubtractDate} />
    <ViewButtons handleMinusButton={handleMinusButton} handlePlusButton={handlePlusButton} />
    <SelectComponent
      sx={{ height: '32px', fontSize: '0.875rem' }}
      value={selectViewValue}
      label="asdsadasdasd"
      handleChange={handleViewsChange}
      options={changeViewOptions}
    />
  </div>
);
