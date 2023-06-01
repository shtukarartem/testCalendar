import { locale } from 'devextreme/localization';
import { useEffect } from 'react';

import './App.css';
import 'devextreme/dist/css/dx.light.css';

import { Calendar } from './components/Calendar/Calendar';

const App = () => {
  useEffect(() => {
    locale('ru');
  }, []);
  return <Calendar />;
};

export default App;
