import classNames from 'classnames';
import { FC } from 'react';

import { handleWeekend } from 'src/utils/utils';

import style from './style.module.css';

type Props = {
  data: any;
  currentView: string;
};
export const DataCell: FC<Props> = ({ data, currentView }) => (
  <div
    className={classNames({
      [style.cell]: handleWeekend(data.startDate, currentView),
    })}
  ></div>
);
