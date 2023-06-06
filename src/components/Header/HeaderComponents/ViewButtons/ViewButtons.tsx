import Button from '@mui/material/Button/Button';
import { FC } from 'react';

import styles from './styles.module.css';

type Props = {
  handlePlusButton: () => void;
  handleMinusButton: () => void;
};

export const ViewButtons: FC<Props> = ({
  handleMinusButton,
  handlePlusButton,
}) => (
  <div className={styles.wrapper}>
    <Button
      variant="outlined"
      className={styles.button}
      onClick={handlePlusButton}
    >
      {'+'}
    </Button>
    <Button
      variant="outlined"
      className={styles.button}
      onClick={handleMinusButton}
    >
      {'-'}
    </Button>
  </div>
);
