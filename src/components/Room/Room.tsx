import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

import { RoomType } from '../../types/types';

type Props = {
  data: {
    room: string;
    description: string;
    type: RoomType;
    id: number;
    color: string;
  };
};

const roomVariants = {
  'Рабочее место': styles.workPlace,
  Офис: styles.office,
  Переговорная: styles.meeting,
};

export const Room: React.FC<Props> = (props) => {
  const { room, description, type } = props.data;
  return (
    <div>
      <div className={styles.room}>
        <div className={classNames(styles.point, roomVariants[type.replaceAll(' ', '') as keyof typeof roomVariants])}></div>
        <span>{room}</span>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
