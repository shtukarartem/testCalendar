import classNames from 'classnames';
import dayjs from 'dayjs';
import React from 'react';

import styles from './styles.module.css';

import { BookingType } from '../../types/types';

const statusVariants = {
  Оплачен: styles.paid,
  Бронь: styles.booked,
  Просрочен: styles.overdue,
};

type Props = {
  data: BookingType;
  updateEvent?: () => void;
};

export const MoreAppointments: React.FC<Props> = ({ data, updateEvent }) => {
  const { client_data, status, startDate } = data;
  const startTime = dayjs(startDate).format('HH:mm');
  return (
    <div className={styles.wrapper} role="button" onClick={updateEvent}>
      <div className={classNames(styles.point, statusVariants[status])}></div>
      <span>
        {startTime} {client_data.name}
      </span>
    </div>
  );
};
