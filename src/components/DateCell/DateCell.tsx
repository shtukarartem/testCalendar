import dayjs from 'dayjs';
import { FC } from 'react';

import { DateCellType } from 'src/types/types';
import { handleFirstCharInUpperCase } from 'src/utils/utils';

import styles from './styles.module.css';

type Props = {
  data: DateCellType;
  currentView: string;
};

export const DateCell: FC<Props> = ({ data, currentView }) => (
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
