import { FC } from 'react';

import { ViewListType } from 'src/types/types';

import push_pin from 'src/assets/images/push_pin.svg';
import unpush_pin from 'src/assets/images/unpush_pin.svg';

import styles from './styles.module.css';

type Props = {
  view: ViewListType;
  onClick: (title: string) => void;
  handleClickChange: () => void;
};

export const ViewType: FC<Props> = ({ view, handleClickChange, onClick }) => (
  /* eslint-disable */
  <div onClick={() => onClick(view.title)} className={styles.wrapper}>
    <div className={styles.title}>
      <img src={view.icon} alt="icon" />
      <div className={styles.description}>{view.title}</div>
    </div>
    <div className={styles.pin}>
      {view.isPinned ? (
        <img
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            handleClickChange();
            event.stopPropagation();
          }}
          src={push_pin}
          alt=""
        />
      ) : (
        <img
          className={styles.unpin}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            handleClickChange();
            event.stopPropagation();
          }}
          src={unpush_pin}
          alt=""
        />
      )}
    </div>
  </div>
);
