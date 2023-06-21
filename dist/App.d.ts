import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
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
declare const App: React.FC<Props>;
export default App;
//# sourceMappingURL=App.d.ts.map