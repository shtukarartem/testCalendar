import { ISchedulerOptions } from 'devextreme-react/scheduler';
import React, { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  data: React.PropsWithChildren<ISchedulerOptions>;
}

export const TooltipComponent: FC<Props> = ({ data }: any) => (
  <div className={styles.wrapper}>
    <div className={styles.fio}> {data.text}</div>
    <div className={styles.data}>
      <span className={styles.dataTitle}>Крайний срок</span>
      <span className={styles.dateText}>
        {data.endDate.getDate()}.{data.endDate.getMonth()}.
        {data.endDate.getFullYear()} c {data.startDate.getHours()}:
        {data.startDate.getMinutes()} по {data.endDate.getHours()}:
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
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          event.stopPropagation()
        }
        className={styles.buttonLight}
      >
        Отменить бронь
      </button>
      <button
        type="button"
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          event.stopPropagation()
        }
        className={styles.buttonLight}
      >
        Звонить
      </button>
    </div>
  </div>
);
