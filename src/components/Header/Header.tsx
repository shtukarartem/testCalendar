import { FC } from 'react';

import { RangeButtons } from './HeaderComponents/RangeButtons/RangeButtons';

type Props = {
  handleAddDate: () => void;
  handleSubtractDate: () => void;
};

export const Header: FC<Props> = ({ handleSubtractDate, handleAddDate }) => (
  <div>
    <RangeButtons
      handleAddDate={handleAddDate}
      handleSubtractDate={handleSubtractDate}
    />
  </div>
);
