import classNames from 'classnames';
import dayjs from 'dayjs';
import { FC } from 'react';

import { BookingType } from 'src/types/types';

import styles from './styles.module.css';

const statusVariants = {
  paid: styles.paid,
  booked: styles.booked,
  overdue: styles.overdue,
};

type Props = {
  data: BookingType;
};

export const MoreAppointments: FC<Props> = ({ data }) => {
  const { text, status, startDate } = data;
  const startTime = dayjs(startDate).format('HH:mm');
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.point, statusVariants[status])}></div>
      <span>
        {startTime} {text}
      </span>
    </div>
  );
};
