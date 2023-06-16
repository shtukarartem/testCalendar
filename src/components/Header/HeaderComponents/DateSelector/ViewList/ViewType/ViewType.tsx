import React from 'react';

import styles from './styles.module.css';

import push_pin from '../../../../../../assets/images/push_pin.svg';
import unpush_pin from '../../../../../../assets/images/unpush_pin.svg';
import { ViewListType } from '../../../../../../types/types';

type Props = {
  view: ViewListType;
  onClick: (title: string) => void;
  handleClickChange: () => void;
};

export const ViewType: React.FC<Props> = ({ view, handleClickChange, onClick }) => (
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
