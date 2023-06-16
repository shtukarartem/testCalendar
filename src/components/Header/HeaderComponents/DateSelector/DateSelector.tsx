import 'dayjs/locale/ru';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';

import { ViewListType } from '../../../../types/types';
import { Menu } from './Menu';

type Props = {
  isOpen?: boolean;
  selectPlaceholder: string;
  views: ViewListType[];
  onSubmit: () => void;
  onCancel: () => void;
  handleOpen: () => void;
  handlePinned: (index: number) => void;
  handleViewClick: (title: string) => void;
};

export const DateSelector: React.FC<Props> = ({
  views,
  selectPlaceholder,
  isOpen = false,
  onSubmit,
  onCancel,
  handleOpen,
  handlePinned,
  handleViewClick,
}) => {
  const [dates, setDates] = useState<(dayjs.Dayjs | null)[] | null>(null);
  const [selectValue, setSelectValue] = useState<string>(selectPlaceholder);
  const handleDates = (dates: (dayjs.Dayjs | null)[] | null) => {
    setDates(dates);
  };
  useEffect(() => {
    setSelectValue(selectPlaceholder);
  }, [selectPlaceholder]);
  return (
    <div className={styles.wrapper}>
      <Select
        defaultValue={selectValue}
        autoWidth
        disableUnderline
        variant="standard"
        className={styles.select}
        labelId="demo-simple-select-standard-label"
        onOpen={handleOpen}
        open={isOpen}
        renderValue={() => selectValue}
      >
        <MenuItem
          className={styles.menuItem}
          component={() => (
            <Menu
              views={views}
              onSubmit={onSubmit}
              onCancel={onCancel}
              handlePinned={handlePinned}
              handleViewClick={handleViewClick}
              dates={dates}
              handleDates={handleDates}
              isOpen={isOpen}
            />
          )}
        />
      </Select>
    </div>
  );
};
