import { Button } from '@mui/material';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  handleAddDate: () => void;
  handleSubtractDate: () => void;
};

export const RangeButtons: React.FC<Props> = ({ handleAddDate, handleSubtractDate }) => (
  <div className={styles.wrapper}>
    <Button variant="outlined" className={styles.button} onClick={handleSubtractDate}>
      {'<'}
    </Button>
    <Button variant="outlined" className={styles.button} onClick={handleAddDate}>
      {'>'}
    </Button>
  </div>
);
