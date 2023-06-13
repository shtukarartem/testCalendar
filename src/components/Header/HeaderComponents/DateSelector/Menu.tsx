import { Button, Switch } from 'antd';
import dayjs from 'dayjs';
import { FC } from 'react';

import { DateRange } from 'src/components/DateRange/DateRange';
import { ViewListType } from 'src/types/types';
import { handleCorrectDateDifference } from 'src/utils/utils';

import styles from 'src/components/Header/HeaderComponents/DateSelector/styles.module.css';

import { ViewList } from './ViewList/ViewList';

type Props = {
  dates: (dayjs.Dayjs | null)[] | null;
  views: ViewListType[];
  isOpen: boolean;
  onSubmit: () => void;
  onCancel: () => void;
  handlePinned: (index: number) => void;
  handleViewClick: (title: string) => void;
  handleDates: (dates: (dayjs.Dayjs | null)[] | null) => void;
};

export const Menu: FC<Props> = ({
  views,
  dates,
  isOpen,
  onSubmit,
  onCancel,
  handlePinned,
  handleViewClick,
  handleDates,
}) => (
  <div className={styles.items}>
    <div className={styles.views}>
      <ViewList handleClick={handleViewClick} viewList={views} handlePinned={handlePinned} />
      <div className={styles.switchContainer}>
        <div className={styles.switchText}>Выходные дни</div>
        <Switch className={styles.switch} size="small" />
      </div>
    </div>
    <div className={styles.dateRange}>
      <DateRange isOpen={isOpen} isFullWidth={true} isError={false} onChange={handleDates} />
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
);
