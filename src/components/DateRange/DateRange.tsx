import 'dayjs/locale/ru';

import { ConfigProvider, DatePicker } from 'antd';
import locale from 'antd/locale/by_BY';
import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import React from 'react';

import styles from './styles.module.css';

import { localeRu } from './../../utils/locale';

const { RangePicker } = DatePicker;

export type TypeOfView = 'standard' | 'tableCell' | 'underline';

const typeOfViewStyles: Record<TypeOfView, string> = {
  standard: '',
  underline: styles.underline,
  tableCell: styles.tableCell,
};

export type SizeType = 'xs' | 's' | 'm' | 'l';

const sizeStyles: Record<SizeType, string> = {
  xs: styles.sizeXS,
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
};
type Props = {
  isFullWidth: boolean;
  isError: boolean;
  isOpen: boolean;
  onChange: (dates: null | (Dayjs | null)[]) => void;
};

export const DateRange: React.FC<Props> = ({ isFullWidth, isError, onChange }) => (
  <ConfigProvider locale={locale}>
    <RangePicker
      open={true}
      locale={localeRu}
      format="DD MMMM YYYY"
      className={classNames(styles.root, typeOfViewStyles['standard'], sizeStyles['s'], {
        [styles.fullWidth]: isFullWidth,
        [styles.error]: isError,
      })}
      popupClassName={styles.antPickerDropdown}
      onChange={onChange}
    />
  </ConfigProvider>
);
