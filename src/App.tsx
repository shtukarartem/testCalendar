import { locale } from 'devextreme/localization';
import React, { useEffect } from 'react';

import './App.css';
import 'devextreme/dist/css/dx.light.css';

import { Calendar } from './components/Calendar/Calendar';
import { MaterialProvider } from './providers/MaterialProvider';
import { data, ownersData, roomsData } from './sefviceFormData';
import { BookingType, OwnerType, RoomComponentType, Scheme } from './types/types';

type Props = {
  owners?: OwnerType[];
  rooms?: RoomComponentType[];
  events?: BookingType[];
  updateEvent?: () => void;
  addEvent?: () => void;
  openUpdateModal?: () => void;
  openAddingModal?: () => void;
  closeModal?: () => void;
  linkDispatcher?: () => void;
  modalUrl?: Scheme;
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
  // modalUrl,
  linkDispatcher,
}) => {
  useEffect(() => {
    locale('ru');
  }, []);
  return (
    <div>
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
					modalUrl={{
						type: 'modal',
						scheme: '/modal/add/:layoutId/:parentLayoutId',
						params: {
							parentLayoutId: '58c0f15d-e840-4aa7-b75d-b4eed2464558',
							layoutId: '697b4c93-2f05-4c33-a520-45b869f14171',
						},
					}}
					linkDispatcher={linkDispatcher}
				/>
			</MaterialProvider>
		</div>
  );
};

export default App;
