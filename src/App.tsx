import { locale } from 'devextreme/localization';
import React, { useEffect } from 'react';

import './App.css';
import 'devextreme/dist/css/dx.light.css';

import { Calendar } from './components/Calendar/Calendar';
import { MaterialProvider } from './providers/MaterialProvider';
import { data, ownersData, roomsData } from './sefviceFormData';
import { BookingType, OwnerType, RoomComponentType } from './types/types';

type Props = {
  owners?: OwnerType[];
  rooms?: RoomComponentType[];
  events?: BookingType[];
  updateEvent?: () => void;
  addEvent?: () => void;
  openUpdateModal?: () => void;
  openAddingModal?: () => void;
  closeModal?: () => void;
  OpenEventWrapper?: React.ComponentType<any>;
};

const App: React.FC<Props> = ({
  owners = ownersData,
  rooms = roomsData,
  events = data,
  updateEvent,
  addEvent,
  openUpdateModal,
  openAddingModal,
  closeModal,
  OpenEventWrapper,
}) => {
  useEffect(() => {
    locale('ru');
  }, []);
  return (
    <MaterialProvider>
      <Calendar
        owners={owners}
        rooms={rooms}
        events={events}
        updateEvent={updateEvent}
        addEvent={addEvent}
        openUpdateModal={openUpdateModal}
        openAddingModal={openAddingModal}
        closeModal={closeModal}
        OpenEventWrapper={OpenEventWrapper}
      />
    </MaterialProvider>
  );
};

export default App;
