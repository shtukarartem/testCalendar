import { FC } from 'react';

import styles from './styles.module.css';

import { ViewListType } from '../../../../../types/types';
import { ViewType } from './ViewType/ViewType';

type Props = {
  viewList: ViewListType[];
  handleClick: (title: string) => void;
  handlePinned: (index: number) => void;
};

export const ViewList: FC<Props> = ({ viewList, handlePinned, handleClick }) => (
  <div className={styles.wrapper}>
    {viewList.map((item, index) => (
      <ViewType
        key={index}
        view={item}
        onClick={handleClick}
        handleClickChange={() => handlePinned(index)}
      />
    ))}
  </div>
);
