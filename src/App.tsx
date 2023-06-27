import { locale } from 'devextreme/localization';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

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
  openAddingModal?: () => void;
  openEditModal?: (id: string) => void;
  closeModal?: () => void;
  modalUrl?: string;
};

const App: React.FC<Props> = ({
  owners = ownersData,
  rooms = roomsData,
  events = data,
  updateEvent,
  addEvent,
  openAddingModal,
  openEditModal,
  closeModal,
}) => {
  useEffect(() => {
    locale('ru');
  }, []);
  return (
    <BrowserRouter>
      <div>
        <MaterialProvider>
          <Calendar
            owners={owners}
            rooms={rooms}
            events={events}
            updateEvent={updateEvent}
            addEvent={addEvent}
            openEditModal={openEditModal}
            openAddingModal={openAddingModal}
            closeModal={closeModal}
          />
        </MaterialProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
