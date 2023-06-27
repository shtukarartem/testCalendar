import classNames from 'classnames';
import React from 'react';

import { handleWeekend } from '../../utils/utils';

import style from './style.module.css';

type Props = {
  data: any;
  currentView: string;
};
export const DataCell: React.FC<Props> = ({ data, currentView }) => (
  <div
    className={classNames({
      [style.cell]: handleWeekend(data.startDate, currentView),
    })}
  ></div>
);
