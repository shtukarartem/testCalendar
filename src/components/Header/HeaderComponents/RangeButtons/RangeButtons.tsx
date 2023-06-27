import IconButton from '@mui/material/IconButton';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  handleAddDate: () => void;
  handleSubtractDate: () => void;
};

export const RangeButtons: React.FC<Props> = ({ handleAddDate, handleSubtractDate }) => (
  <div className={styles.wrapper}>
    <IconButton className={styles.leftButton} onClick={handleSubtractDate}>
      {'<'}
    </IconButton>
    <IconButton className={styles.rightButton} onClick={handleAddDate}>
      {'>'}
    </IconButton>
  </div>
);
