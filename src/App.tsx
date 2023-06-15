import { locale } from 'devextreme/localization';
import React, { useEffect } from 'react';

import './App.css';
import 'devextreme/dist/css/dx.light.css';

import { Calendar } from './components/Calendar/Calendar';
import { MaterialProvider } from './providers/MaterialProvider';

const App: React.FC = () => {
  useEffect(() => {
    locale('ru');
  }, []);
  return (
    <MaterialProvider>
      <Calendar />
    </MaterialProvider>
  );
};

export default App;
