import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from '@mui/material';
import dayjs from 'dayjs';
import { FC, MouseEvent } from 'react';

import { BookingType } from 'src/types/types';

import styles from './styles.module.css';

type Props = {
  data: BookingType;
  handleClose: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const TooltipComponent: FC<Props> = ({ data, handleClose }) => (
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
      <span className={styles.dataTitle}>Крайний срок</span>
      <span className={styles.dateText}>
        {dayjs(data.endDate).format('DD.MM.YYYY')} c {dayjs(data.startDate).format('HH:mm')} по{' '}
        {dayjs(data.endDate).format('HH:mm')}
      </span>
    </div>
    <div className={styles.clientType}>
      <span className={styles.dataTitle}>Тип клиента</span>
      <span className={styles.dateText}>{data.client_data.type}</span>
    </div>
    <div className={styles.email}>{data.client_data.email}</div>
    <div className={styles.number}>{data.client_data.phone}</div>
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
