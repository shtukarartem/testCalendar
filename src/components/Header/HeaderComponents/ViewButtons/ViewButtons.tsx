import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

type Props = {
  isDisabled: boolean;
  handlePlusButton: () => void;
  handleMinusButton: () => void;
};

export const ViewButtons: React.FC<Props> = ({
  isDisabled,
  handleMinusButton,
  handlePlusButton,
}) => (
  <div className={styles.wrapper}>
    <IconButton className={styles.addButton} onClick={handlePlusButton}>
      <AddIcon />
    </IconButton>
    <IconButton disabled={isDisabled} className={styles.removeButton} onClick={handleMinusButton}>
      <RemoveIcon className={classNames({ [styles.disabled]: isDisabled })} />
    </IconButton>
  </div>
);
