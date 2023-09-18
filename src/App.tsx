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
  deleteEvent?: (id: string[]) => void;
  openAddingModal?: () => void;
  openEditModal?: (id: string) => void;
  closeModal?: () => void;
  modalUrl?: string;
  isEmpty?: boolean;
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
  isEmpty,
  deleteEvent,
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
            events={isEmpty ? [] : events}
            updateEvent={updateEvent}
            addEvent={addEvent}
            openEditModal={openEditModal}
            openAddingModal={openAddingModal}
            closeModal={closeModal}
            deleteEvent={deleteEvent}
          />
        </MaterialProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
