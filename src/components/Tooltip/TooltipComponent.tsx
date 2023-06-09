import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from '@mui/material';
import { FC, MouseEvent } from 'react';

import styles from './styles.module.css';

type Props = {
  data: {
    text: string;
    ownerId: number[];
    startDate: Date;
    endDate: Date;
    rooms: number;
    email: string;
    number: string;
  };
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
    <div className={styles.fio}>{data.text}</div>
    <div className={styles.data}>
      <span className={styles.dataTitle}>Крайний срок</span>
      <span className={styles.dateText}>
        {data.endDate.getDate()}.{data.endDate.getMonth()}.{data.endDate.getFullYear()} c{' '}
        {data.startDate.getHours()}:{data.startDate.getMinutes()} по {data.endDate.getHours()}:
        {data.endDate.getMinutes()}
      </span>
    </div>
    <div className={styles.clientType}>
      <span className={styles.dataTitle}>Тип клиента</span>
      <span className={styles.dateText}>ИП</span>
    </div>
    <div className={styles.email}>{data.email}</div>
    <div className={styles.number}>{data.number}</div>
    <div className={styles.footer}>
      <button
        type="button"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
        }}
        className={styles.buttonLight}
      >
        Отменить бронь
      </button>
      <button
        type="button"
        onClick={(event: MouseEvent<HTMLButtonElement>) => event.stopPropagation()}
        className={styles.buttonLight}
      >
        Звонить
      </button>
    </div>
  </div>
);
