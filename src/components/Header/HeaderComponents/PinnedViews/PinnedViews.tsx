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
        <React.Fragment key={index}>
          {item.isPinned && (
            <img
              className={classNames(styles.icon, {
                [styles.select]:
                  (isSelect && selectIcon === item.title) ||
                  (!isSelect && item.title === 'Сегодня'),
              })}
              onClick={() => {
                handleClick(item.title);
                handleSelect(item.title);
              }}
              src={item.icon}
              alt=""
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
