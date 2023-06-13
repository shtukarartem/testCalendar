import { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import styles from './styles.module.css';

type Props = {
  handleAddDate: () => void;
  handleSubtractDate: () => void;
};

export const RangeButtons: FC<Props> = ({ handleAddDate, handleSubtractDate }) => (
  <div className={styles.wrapper}>
    <IconButton className={styles.leftButton} onClick={handleSubtractDate}>
      {'<'}
    </IconButton>
    <IconButton className={styles.rightButton} onClick={handleAddDate}>
      {'>'}
    </IconButton>
  </div>
);
