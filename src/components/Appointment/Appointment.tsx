import classNames from 'classnames';
import dayjs from 'dayjs';
import React from 'react';

import styles from './styles.module.css';

import { Link } from '../../navigation/Link';
import { BookingType, Scheme } from '../../types/types';

type Props = {
  data: BookingType;
  currentDate: dayjs.Dayjs;
  OpenEventWrapper?: React.ComponentType<any>;
  modalUrl?: Scheme;
  linkDispatcher?: () => void;
};

const statusVariants = {
  paid: styles.paid,
  booked: styles.booked,
  overdue: styles.overdue,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EmptyComponent: React.FC<any> = ({ children }) => <>{children}</>;

export const Appointment: React.FC<Props> = ({
  data,
  currentDate,
  OpenEventWrapper,
  modalUrl,
  linkDispatcher,
}) => {
  const { client_data, startDate, endDate, status } = data;

  const startTime = dayjs(startDate).format('HH:mm');
  const endTime = dayjs(endDate).format('HH:mm');
  const endDateFormat = dayjs(endDate);

  const isPast = endDateFormat.isBefore(currentDate);

  const LinkWrapper = OpenEventWrapper ?? EmptyComponent;

  return (
    <LinkWrapper>
      <Link url={modalUrl} dispatcher={linkDispatcher}>
        <div
          className={classNames(styles.wrapper, statusVariants[status], { [styles.past]: isPast })}
        >
          <div className={styles.time}>
            {startTime}-{endTime}
          </div>
          <div className={styles.owner}>{client_data.name}</div>
        </div>
      </Link>
    </LinkWrapper>
  );
};
