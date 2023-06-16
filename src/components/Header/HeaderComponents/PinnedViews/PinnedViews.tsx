import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './styles.module.css';

import { ViewListType } from '../../../../types/types';

type Props = {
  views: ViewListType[];
  handleSelect: (icon: string) => void;
};

export const PinnedViews: React.FC<Props> = ({ views, handleSelect }) => {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [selectIcon, setSelectIcon] = useState<string>('');
  const handleClick = (field: string) => {
    setIsSelect(true);
    setSelectIcon(field);
  };
  return (
    <div className={styles.wrapper}>
      {views.map((item, index) => (
        <>
          {item.isPinned && (
            <img
              key={index}
              className={classNames(styles.icon, {
                [styles.select]: isSelect && selectIcon === item.title,
              })}
              onClick={() => {
                handleClick(item.title);
                handleSelect(item.title);
              }}
              src={item.icon}
              alt=""
            />
          )}
        </>
      ))}
    </div>
  );
};
