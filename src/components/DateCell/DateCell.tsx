import dayjs from 'dayjs';
import React from 'react';

import styles from './styles.module.css';

import { DateCellType } from '../../types/types';
import { handleFirstCharInUpperCase } from '../../utils/utils';

type Props = {
  data: DateCellType;
  currentView: string;
};

export const DateCell: React.FC<Props> = ({ data, currentView }) => (
  <>
    {currentView === 'timelineMonth' ? (
      <div className={styles.wrapper}>
        <div>{handleFirstCharInUpperCase(dayjs(data.date).locale('ru').format('dd'))}</div>
        <div>{dayjs(data.date).format('DD')}</div>
      </div>
    ) : (
      <div> {data.text} </div>
    )}
  </>
);
