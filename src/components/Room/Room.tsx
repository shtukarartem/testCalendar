import classNames from 'classnames';
import { FC } from 'react';

import { RoomType } from 'src/types/types';

import styles from './styles.module.css';

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
  workPlace: styles.workPlace,
  office: styles.office,
  meeting: styles.meeting,
};

export const Room: FC<Props> = (props) => {
  const { room, description, type } = props.data;
  return (
    <div>
      <div className={styles.room}>
        <div className={styles.point}></div>
        <div className={classNames(styles.point, roomVariants[type])}></div>
        <span>{room}</span>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
