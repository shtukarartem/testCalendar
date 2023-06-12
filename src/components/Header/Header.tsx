import dayjs from 'dayjs';
import { FC, useState } from 'react';

import { DateSelector } from 'src/components/Header/HeaderComponents/DateSelector/DateSelector';
import { viewList } from 'src/components/Header/HeaderComponents/DateSelector/ViewList/ViewListConstants';
import { PinnedViews } from 'src/components/Header/HeaderComponents/PinnedViews/PinnedViews';
import { RangeButtons } from 'src/components/Header/HeaderComponents/RangeButtons/RangeButtons';
import { ViewButtons } from 'src/components/Header/HeaderComponents/ViewButtons/ViewButtons';
import { SelectComponent } from 'src/components/Select/Select';
import { changeViewOptions } from 'src/constants/constants';
import { ViewListType } from 'src/types/types';
import { handleFirstCharInUpperCase, handleSelectedPlaceholder } from 'src/utils/utils';

import styles from './styles.module.css';

type Props = {
  selectViewValue: string;
  selectPlaceholder: string;
  handleAddDate: () => void;
  handleSubtractDate: () => void;
  handleViewsChange: (value: string) => void;
  handleMinusButton: () => void;
  handlePlusButton: () => void;
  handleSelect: (icon: string) => void;
};

export const Header: FC<Props> = ({
  selectViewValue,
  handleSubtractDate,
  handleAddDate,
  handleViewsChange,
  handleMinusButton,
  handlePlusButton,
  handleSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [views, setViews] = useState<ViewListType[]>(viewList);
  const [selectedPlaceholder, setSelectedPlaceholder] = useState(handleFirstCharInUpperCase(dayjs().locale('ru').format('MMMM')));

  const handlePinned = (i: number) => {
    const newState: ViewListType[] = views.map((item, index) => {
      if (index === i) {
        return { ...item, isPinned: !item.isPinned };
      }
      return item;
    });
    setViews(newState);
  };
  return (
    <div className={styles.wrapper}>
      <RangeButtons handleAddDate={handleAddDate} handleSubtractDate={handleSubtractDate} />
      <ViewButtons handleMinusButton={handleMinusButton} handlePlusButton={handlePlusButton} />
      <DateSelector
        views={views}
        handlePinned={handlePinned}
        isOpen={isOpen}
        selectPlaceholder={selectedPlaceholder}
        onCancel={() => setIsOpen(false)}
        handleOpen={() => setIsOpen(true)}
        onSubmit={() => setIsOpen(false)}
        handleViewClick={(title: string) => {
          setIsOpen(false);
          handleSelect(title);
          setSelectedPlaceholder(handleSelectedPlaceholder(title));
        }}
      />
      <PinnedViews
        views={views}
        handleSelect={(title) => {
          handleSelect(title);
          setSelectedPlaceholder(handleSelectedPlaceholder(title));
        }}
      />
      <SelectComponent
        sx={{ height: '32px', fontSize: '0.875rem', marginLeft: 'auto', marginRight: '20px' }}
        value={selectViewValue}
        label="asdsadasdasd"
        handleChange={handleViewsChange}
        options={changeViewOptions}
      />
    </div>
  );
};
