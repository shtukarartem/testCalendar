import IconButton from '@mui/material/IconButton/IconButton';
import React, { useState } from 'react';

import styles from './styles.module.css';

import IconSettings from '../../assets/images/IconButton.svg';
import { changeViewOptions } from '../../constants/constants';
import { ViewListType } from '../../types/types';
import { SelectComponent } from './../Select/Select';
import { DateSelector } from './HeaderComponents/DateSelector/DateSelector';
import { viewList } from './HeaderComponents/DateSelector/ViewList/ViewListConstants';
import { PinnedViews } from './HeaderComponents/PinnedViews/PinnedViews';
import { RangeButtons } from './HeaderComponents/RangeButtons/RangeButtons';
import { ViewButtons } from './HeaderComponents/ViewButtons/ViewButtons';

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

export const Header: React.FC<Props> = ({
  isDisabled,
  selectedPlaceholder,
  selectViewValue,
  handleSubtractDate,
  handleAddDate,
  handleViewsChange,
  handleMinusButton,
  handlePlusButton,
  handleSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [views, setViews] = useState<ViewListType[]>(viewList);

  const handlePinned = (i: number) => {
    const newState: ViewListType[] = views.map((item, index) => {
      if (index === i) {
        return { ...item, isPinned: !item.isPinned };
      }
      return item;
    });
    setViews(newState);
  };
  return (
    <div className={styles.wrapper}>
      <RangeButtons handleAddDate={handleAddDate} handleSubtractDate={handleSubtractDate} />
      <ViewButtons isDisabled={isDisabled} handleMinusButton={handleMinusButton} handlePlusButton={handlePlusButton} />
      <DateSelector
        views={views}
        handlePinned={handlePinned}
        isOpen={isOpen}
        selectPlaceholder={selectedPlaceholder}
        onCancel={() => setIsOpen(false)}
        handleOpen={() => setIsOpen(true)}
        onSubmit={() => setIsOpen(false)}
        handleViewClick={(title: string) => {
          setIsOpen(false);
          handleSelect(title);
        }}
      />
      <PinnedViews
        views={views}
        handleSelect={(title) => {
          handleSelect(title);
        }}
      />
      <SelectComponent
        sx={{ height: '32px', fontSize: '0.875rem', marginLeft: 'auto', marginRight: '20px' }}
        value={selectViewValue}
        handleChange={handleViewsChange}
        options={changeViewOptions}
      />
      <IconButton className={styles.settingsIcon}>
        <img src={IconSettings} alt="" />
      </IconButton>
    </div>
  );
};
