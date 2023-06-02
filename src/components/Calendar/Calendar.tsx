import dayjs from 'dayjs';
import { Scheduler } from 'devextreme-react';
import { Editing, Resource, View } from 'devextreme-react/scheduler';
import { OptionChangedEventInfo } from 'devextreme/core/dom_component';
import dxScheduler from 'devextreme/ui/scheduler';
import { useState } from 'react';

import { views } from 'src/constants/constants';

import style from './style.module.css';

import { data, priorityData, resourcesData } from '../../data';
import { Header } from '../Header/Header';
import { TooltipComponent } from '../Tooltip/TooltipComponent';
import { handleAddDate, handleSubtractDate } from 'src/utils/utils';

export const Calendar = () => {
  const groups = ['priority'];
  const [currentDate, setCurrentDate] = useState(dayjs(new Date(2021, 1, 2)));
  const [currentView, setCurrentView] = useState<string>('Месяц');
 

  return (
    <>
      <Header
        handleAddDate={() => setCurrentDate(handleAddDate(currentView, currentDate) ?? currentDate)}
        handleSubtractDate={() => setCurrentDate(handleSubtractDate(currentView, currentDate) ?? currentDate)}
      />
      <button
        onClick={() => setCurrentDate(currentDate.add(7, 'day'))}
        type="button"
      >
        {' '}
        today{' '}
      </button>
      <Scheduler
        className={style.wrapper}
        timeZone="Europe/Moscow"
        dataSource={data}
        views={views as any} // eslint-disable-line
        defaultCurrentView="timelineMonth"
        currentDate={currentDate.toDate()}
        appointmentTooltipComponent={(data) => (
          <TooltipComponent data={data.data.appointmentData} />
        )}
        onOptionChanged={(e: OptionChangedEventInfo<dxScheduler>) => {
          if (e.name === 'currentView') setCurrentView(e.value);
        }}
        height={900}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        startDayHour={8}
        endDayHour={20}
      >
        <View />
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

        <Editing
          allowDragging={false}
          allowResizing={false}
          allowUpdating={false}
        />
      </Scheduler>
    </>
  );
};
