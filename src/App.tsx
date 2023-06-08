import { locale } from 'devextreme/localization';
import { FC, useEffect } from 'react';

import { MaterialProvider } from 'src/providers/MaterialProvider';

import './App.css';
import 'devextreme/dist/css/dx.light.css';

import { Calendar } from './components/Calendar/Calendar';

const App: FC = () => {
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
