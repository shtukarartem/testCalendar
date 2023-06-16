import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  handlePlusButton: () => void;
  handleMinusButton: () => void;
};

export const ViewButtons: React.FC<Props> = ({ handleMinusButton, handlePlusButton }) => (
  <div className={styles.wrapper}>
    <IconButton className={styles.addButton} onClick={handlePlusButton}>
      <AddIcon />
    </IconButton>
    <IconButton className={styles.removeButton} onClick={handleMinusButton}>
      <RemoveIcon />
    </IconButton>
  </div>
);
