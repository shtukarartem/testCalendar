import { Button } from '@mui/material';
import { FC } from 'react';

import styles from './styles.module.css';

type Props = {
  handleAddDate: () => void;
  handleSubtractDate: () => void;
}

export const RangeButtons: FC<Props> = ({
  handleAddDate,
  handleSubtractDate,
}) => {
  const ads = '<';
  return (
    <div className={styles.wrapper}>
      <Button
        variant="outlined"
        className={styles.button}
        onClick={handleSubtractDate}
      >
        {ads}
      </Button>
      <Button
        variant="outlined"
        className={styles.button}
        onClick={handleAddDate}
      >
        {'>'}
      </Button>
    </div>
  );
};
