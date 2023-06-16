import classNames from 'classnames';
import dayjs from 'dayjs';
import React from 'react';

import styles from './styles.module.css';

import { BookingType } from '../../types/types';

const statusVariants = {
  paid: styles.paid,
  booked: styles.booked,
  overdue: styles.overdue,
};

type Props = {
  data: BookingType;
};

export const MoreAppointments: React.FC<Props> = ({ data }) => {
  const { client_data, status, startDate } = data;
  const startTime = dayjs(startDate).format('HH:mm');
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.point, statusVariants[status])}></div>
      <span>
        {startTime} {client_data.name}
      </span>
    </div>
  );
};
