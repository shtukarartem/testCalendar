import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from '@mui/material';
import dayjs from 'dayjs';
import React, { MouseEvent } from 'react';
import email from '../../assets/images/email.svg'
import call from '../../assets/images/call.svg'

import styles from './styles.module.css';

import { BookingType } from '../../types/types';

type Props = {
  data: BookingType;
  handleClose: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const TooltipComponent: React.FC<Props> = ({ data, handleClose }) => (
  <div className={styles.wrapper}>
    <div className={styles.icons}>
      <IconButton disabled>
        <OpenInNewIcon />
      </IconButton>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </div>
    <div className={styles.fio}>{data.client_data.name}</div>
    <div className={styles.data}>
      <span className={styles.dataTitle}>Срок бранирования</span>
      <span className={styles.dateText}>
        {dayjs(data.endDate).format('DD.MM.YYYY')} c {dayjs(data.startDate).format('HH:mm')} по{' '}
        {dayjs(data.endDate).format('HH:mm')}
      </span>
    </div>
    <div className={styles.clientType}>
      <div className={styles.dataTitle}>Тип клиента</div>
      <div className={styles.dateText}>{data.client_data.type}</div>
    </div>
    <div className={styles.email}>
      <img src={email} alt="" />{data.client_data.email}
      </div>
    <div className={styles.number}>
    <img src={call} alt="" />{data.client_data.phone}
      </div>
    <div className={styles.footer}>
      <button
        disabled
        type="button"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
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
