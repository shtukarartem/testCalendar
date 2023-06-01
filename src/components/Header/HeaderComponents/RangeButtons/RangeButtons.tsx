import { Button } from '@mui/material';
import { FC } from 'react';
import styles from './styles.module.css';

interface Props {
  handleAddDate: () => void
  handleSubtractDate: () => void
}

export const RangeButtons:FC<Props> = ({handleAddDate, handleSubtractDate}) => {

  const ads = '<';
  return (
    <>
      <Button
        sx={{ color: '#C9C5CA', borderColor: '#C9C5CA' }}
        variant="outlined"
        className={styles.button}
        onClick={handleSubtractDate}
      >
        {ads}
      </Button>
      <Button
        sx={{ color: '#C9C5CA', borderColor: '#C9C5CA' }}
        variant="outlined"
        className={styles.button}
        onClick={handleAddDate}
      >
        {'>'}
      </Button>
    </>
  );
};
