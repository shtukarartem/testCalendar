import 'dayjs/locale/ru';

import { FormControl, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button, Switch } from 'antd';
import dayjs from 'dayjs';
import { FC, useEffect, useState } from 'react';

import styles from './styles.module.css';

import { ViewListType } from '../../../../types/types';
import { handleCorrectDateDifference } from '../../../../utils/utils';
import { DateRange } from './../../../DateRange/DateRange';
import { ViewList } from './ViewList/ViewList';

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

export const DateSelector: FC<Props> = ({
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
  const [selectValue, setSelectValue] = useState<string>('');
  const handleDates = (dates: (dayjs.Dayjs | null)[] | null) => {
    setDates(dates);
  };
  useEffect(() => {
    setSelectValue('');
  }, []);
  return (
    <div className={styles.wrapper}>
      <FormControl className={styles.formControl} variant="standard">
        <InputLabel className={styles.inputLabel} id="demo-simple-select-label">
          {selectPlaceholder}
        </InputLabel>
        <Select
          disableUnderline
          variant="standard"
          className={styles.select}
          labelId="demo-simple-select-standard-label"
          onOpen={handleOpen}
          open={isOpen}
          label="Age"
          value={selectValue}
        >
          <MenuItem className={styles.menuItem}>
            <div className={styles.items}>
              <div className={styles.views}>
                <ViewList
                  handleClick={handleViewClick}
                  viewList={views}
                  handlePinned={handlePinned}
                />
                <div className={styles.switchContainer}>
                  <div className={styles.switchText}>Выходные дни</div>
                  <Switch className={styles.switch} size="small" />
                </div>
              </div>
              <div className={styles.dateRange}>
                <DateRange
                  isOpen={isOpen}
                  isFullWidth={true}
                  isError={false}
                  onChange={handleDates}
                />
                <div className={styles.dateRangeFooter}>
                  {dates && (
                    <div className={styles.daysCounter}>
                      {' '}
                      <div className={styles.counter}>
                        {handleCorrectDateDifference(dayjs(dates[1]).diff(dayjs(dates[0]), 'd'))}
                      </div>
                      <div className={styles.range}>
                        c {dayjs(dates[0]).locale('ru').format('DD MMMM')} по{' '}
                        {dayjs(dates[1]).locale('ru').format('DD MMMM')}
                      </div>
                    </div>
                  )}
                  <div className={styles.buttons}>
                    <Button onClick={onCancel} className={styles.selectButton}>
                      Отмена
                    </Button>
                    <Button onClick={onSubmit} className={styles.selectButton}>
                      Применить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
