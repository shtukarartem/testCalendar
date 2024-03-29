import classNames from 'classnames';
import dayjs from 'dayjs';
import React, { memo } from 'react';

import styles from './styles.module.css';

import { DateCellType } from '../../types/types';
import { handleFirstCharInUpperCase, handleWeekend } from '../../utils/utils';

type Props = {
  data: DateCellType;
  currentView: string;
};

export const DateCell: React.FC<Props> = memo(({ data, currentView }) => (
  <>
    <div
      className={classNames(styles.wrapper, {
        [styles.cell]: handleWeekend(data.date, currentView),
      })}
    >
      <div>{handleFirstCharInUpperCase(dayjs(data.date).locale('ru').format('dd'))}</div>
      <div>{dayjs(data.date).format('DD')}</div>
    </div>
  </>
));
