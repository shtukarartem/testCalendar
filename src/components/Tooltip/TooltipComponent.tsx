import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from '@mui/material';
import dayjs from 'dayjs';
import React, { MouseEvent } from 'react';

import styles from './styles.module.css';

import call from '../../assets/images/call.svg';
import email from '../../assets/images/email.svg';
import { BookingType } from '../../types/types';

type Props = {
  data: BookingType;
  handleClose: (e: MouseEvent<HTMLButtonElement>) => void;
  openEditModal?: (id: string) => void;
  deleteEvent?: (id: string[]) => void;
};

export const TooltipComponent: React.FC<Props> = ({
  data,
  openEditModal,
  handleClose,
  deleteEvent,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.icons}>
      <IconButton onClick={() => openEditModal?.(data.eventId)}>
        <OpenInNewIcon />
      </IconButton>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </div>
    <span className={styles.fio}>{data.client_data.name}</span>
    <div className={styles.data}>
      <span className={styles.dataTitle}>Срок бронирования</span>
      <span className={styles.dateText}>
        c {dayjs(data.startDate).format('DD.MM.YYYY')} {dayjs(data.startDate).format('HH:mm')} по{' '}
        {dayjs(data.startDate).diff(data.endDate, 'day')
          ? dayjs(data.endDate).format('DD.MM.YYYY')
          : ''}{' '}
        {dayjs(data.endDate).format('HH:mm')}
      </span>
    </div>
    <div className={styles.clientType}>
      <span className={styles.dataTitle}>Тип клиента</span>
      <span className={styles.dateText}>{data.client_data.type}</span>
    </div>
    <div className={styles.email}>
      <img src={email} alt="" />
      {data.client_data.email}
    </div>
    <div className={styles.number}>
      <img src={call} alt="" />
      {data.client_data.phone}
    </div>
    <div className={styles.footer}>
      <button
        type="button"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          deleteEvent?.([data.eventId]);
        }}
        className={styles.buttonLight}
      >
        Отменить бронь
      </button>
      <button
        disabled
        type="button"
        onClick={(event: MouseEvent<HTMLButtonElement>) => event.stopPropagation()}
        className={styles.buttonLight}
      >
        Звонить
      </button>
    </div>
  </div>
);
