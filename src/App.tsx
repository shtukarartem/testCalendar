import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { locale } from 'devextreme/localization';
import { useEffect } from 'react';

import { views } from 'src/constants/constants';

import style from './style.module.css';
import 'devextreme/dist/css/dx.light.css';

import { data, priorityData, resourcesData } from './data';

const groups = ['priority'];
const currentDate = new Date();
const App = () => {
  useEffect(() => {
    locale('ru');
  }, []);
  return (
    <div className={style.container}>
      <Scheduler
        className={style.wrapper}
        timeZone="Europe/Moscow"
        dataSource={data}
        views={views as any} // eslint-disable-line
        defaultCurrentView="timelineMonth"
        defaultCurrentDate={currentDate}
        height={900}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        startDayHour={8}
        endDayHour={20}
      >
        <Resource
          fieldExpr="ownerId"
          allowMultiple={true}
          dataSource={resourcesData}
          label="Owner"
          useColorAsDefault={true}
        />
        <Resource
          fieldExpr="priority"
          allowMultiple={false}
          dataSource={priorityData}
          label="Priority"
        />
      </Scheduler>
    </div>
  );
};

export default App;
