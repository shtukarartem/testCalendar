import { FC } from 'react';

import styles from './styles.module.css';

type Props = {
  data: {
    room: string;
    description: string;
    id: number;
    color: string;
  };
};

export const Room: FC<Props> = (props) => {
  const { room, description } = props.data;
  return (
    <div>
      <div className={styles.room}>{room}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
