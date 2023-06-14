import classNames from 'classnames';
import { FC, useState } from 'react';

import { ViewListType } from 'src/types/types';

import styles from './styles.module.css';

type Props = {
  views: ViewListType[];
  handleSelect: (icon: string) => void;
};

export const PinnedViews: FC<Props> = ({ views, handleSelect }) => {
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
