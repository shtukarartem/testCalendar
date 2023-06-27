import React from 'react';

import styles from './styles.module.css';

type Props = {
  data: {
    appointmentCount: number;
    isCompact: boolean;
  };
};

export const MoreButton: React.FC<Props> = ({ data }) => {
  const { appointmentCount } = data;
  return <div className={styles.wrapper}>{appointmentCount} more</div>;
};
