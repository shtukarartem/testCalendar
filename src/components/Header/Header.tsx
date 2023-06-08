import { FC, useState } from 'react';

import { SelectComponent } from 'src/components/Select/Select';
import { changeViewOptions } from 'src/constants/constants';
import { ViewListType } from 'src/types/types';

import styles from './styles.module.css';

import { DateSelector } from './HeaderComponents/DateSelector/DateSelector';
import { viewList } from './HeaderComponents/DateSelector/ViewList/ViewListConstants';
import { PinnedViews } from './HeaderComponents/PinnedViews/PinnedViews';
import { RangeButtons } from './HeaderComponents/RangeButtons/RangeButtons';
import { ViewButtons } from './HeaderComponents/ViewButtons/ViewButtons';

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
  const [selectedPlaceholde, setSelectedPlaceholde] = useState('месяц');

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
        selectPlaceholder={selectedPlaceholde}
        onCancel={() => setIsOpen(false)}
        handleOpen={() => setIsOpen(true)}
        onSubmit={() => setIsOpen(false)}
        handleViewClick={(title: string) => {
          setIsOpen(false);
          handleSelect(title);
          setSelectedPlaceholde(title);
        }}
      />
      <PinnedViews
        views={views}
        handleSelect={(title) => {
          handleSelect(title);
          setSelectedPlaceholde(title);
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
