import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
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
declare const App: React.FC<Props>;
export default App;
//# sourceMappingURL=App.d.ts.map