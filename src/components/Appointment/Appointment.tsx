import classNames from 'classnames';
import dayjs from 'dayjs';
import { FC } from 'react';

import { BookingType } from 'src/types/types';

import styles from './styles.module.css';

type Props = {
  data: BookingType;
  currentDate: dayjs.Dayjs;
};

const statusVariants = {
  paid: styles.paid,
  booked: styles.booked,
  overdue: styles.overdue,
};

export const Appointment: FC<Props> = ({ data, currentDate }) => {
  const { client_data , startDate, endDate, status } = data;
  const startTime = dayjs(startDate).format('HH:mm');
  const endTime = dayjs(endDate).format('HH:mm');
  const endDateFormat = dayjs(endDate);

  const isPast = endDateFormat.isBefore(currentDate);

  return (
    <div className={classNames(styles.wrapper, statusVariants[status], { [styles.past]: isPast })}>
      <div className={styles.time}>
        {startTime}-{endTime}
      </div>
      <div className={styles.time}>{client_data.name}</div>
    </div>
  );
};
